import * as fcl from "@onflow/fcl";

const GET_COLLECTION_LENGTH = `
import NonFungibleToken from 0xNonFungibleToken
import Knight from 0xCryptoKnight

pub fun main(addr:Address): UInt64{
    let account = getAuthAccount(addr)
    let collectionRef = account.getCapability<&{Knight.KnightCollectionPublic}>(Knight.PublicPath).borrow() ?? panic("Could not borrow Collection")
    return collectionRef.getIDs().length
}`;

export async function getCollectionLength() {
  try {
    const response = await fcl.query({
      cadence: GET_COLLECTION_LENGTH,
    });
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("Error get collection length:", error);
    throw error;
  }
}
