import * as fcl from "@onflow/fcl";

const FIGHT = `
import Knight from 0xCryptoKnight

transaction(userA:Address, userAKnightId: UInt64, userB:Address, userBKnightId: UInt64){
    prepare(signer:AuthAccount){
        Knight.battle(userA: userA, userAKnightId: userAKnightId, userB: userB, userBKnightId: userBKnightId)
    }
}`;

export async function knightAttack(
  user1Address,
  user1KnightId,
  user2Address,
  user2KnightId,
  setTransacting,
) {
  try {
    const response = await fcl.mutate({
      cadence: FIGHT,
      args: (arg, t) => [
        arg(user1Address, t.Address),
        arg(user1KnightId, t.UInt64),
        arg(user2Address, t.Address),
        arg(user2KnightId, t.UInt64),
      ],
      payer: fcl.authz,
      proposer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 999,
    });
    console.log("response", response);
    // from id, wait for the transaction to be sealed
    setTransacting && setTransacting(true);
    const res = await fcl.tx(response).onceSealed();
    console.log("battle sealed?", res);
    return res;
  } catch (error) {
    console.error("Error knight attack", error);
    throw error;
  }
}
