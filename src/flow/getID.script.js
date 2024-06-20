import * as fcl from "@onflow/fcl";

const GET_ID = `
import Knight from 0xCryptoKnight

pub fun main(addr:Address): [UInt64]{
    let account = getAuthAccount(addr)
    let collectionRef = account.getCapability<&{Knight.KnightCollectionPublic}>(Knight.PublicPath).borrow() ?? panic("Could not borrow Collection")
    return collectionRef.getIDs()
}`;

export async function getId(address) {
  try {
    const response = await fcl.query({
      cadence: GET_ID,
      args: (arg, t) => [arg(address, t.Address)],
    });
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("Error get ID:", error);
    throw error;
  }
}
