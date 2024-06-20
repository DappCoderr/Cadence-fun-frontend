import * as fcl from "@onflow/fcl";

const GET_COLLECTION_LENGTH = `
import Knight from 0xCryptoKnight

pub fun main(addr:Address): Bool{
    let account = getAuthAccount(addr)
    return account.getCapability<&{Knight.KnightCollectionPublic}>(Knight.PublicPath).check()
}`;

export const checkKnightCollection = async (address) => {
  if (!address) return false;
  try {
    const response = await fcl.query({
      cadence: GET_COLLECTION_LENGTH,
      args: (arg, t) => [arg(address, t.Address)],
    });
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("Error checking knight collection:", error);
    throw error;
  }
};
