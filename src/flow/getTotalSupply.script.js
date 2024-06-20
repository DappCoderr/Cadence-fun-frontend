import * as fcl from "@onflow/fcl";

const GET_TOTAL_SUPPLY = `
import Knight from 0xCryptoKnight

pub fun main(): UInt64{
    return Knight.totalSupply
}`;

export async function getTotalSupply() {
  try {
    const response = await fcl.query({
      cadence: GET_TOTAL_SUPPLY,
    });
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("Error get total supply:", error);
    throw error;
  }
}
