import * as fcl from "@onflow/fcl";

const FIGHT = `
import CryptoKnight from 0xCryptoKnight

transaction(userA:Address, userAKnightId: UInt64, userB:Address, userBKnightId: UInt64){
    prepare(signer:AuthAccount){
        Knight.battle(userA: userA, userAKnightId: userAKnightId, userB: userB, userBKnightId: userBKnightId)
    }
}`;

export async function knightAttack(
  user1Address,
  user1KnightId,
  user2Address,
  user2KnightId
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
    return response;
  } catch (error) {
    console.error("Error knight attack", error);
    throw error;
  }
}
