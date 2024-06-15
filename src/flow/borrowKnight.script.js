import * as fcl from "@onflow/fcl";

const GET_BORROW_KNIGHT = `
import NonFungibleToken from 0xNonFungibleToken
import CryptoKnight from 0xCryptoKnight

pub fun main(addr:Address, id:UInt64): ResultKnight{
    let account = getAuthAccount(addr)
    let collRef = account.getCapability<&{Knight.KnightCollectionPublic}>(Knight.PublicPath).borrow<>() ?? panic("Could not borrow")
    let nft =  collRef.borrowKinght(id: id)
    return ResultKnight(id: id, name: nft?.details?.name, type: nft?.details?.type, date:nft?.details?.dateCreated, xp: nft?.xp, win: nft?.winCount)
}

pub struct ResultKnight{
    pub let id: UInt64
    pub let name: String?
    pub let type: String?
    pub let date: UFix64?
    pub let xp: UInt64?
    pub let winCount: UInt64?

    init(id:UInt64, name:String?, type:String?, date:UFix64?, xp:UInt64?, win:UInt64?){
        self.id = id
        self.name = name
        self.type = type
        self.date = date
        self.xp = xp
        self.winCount = win
    }
}`;

export const borrowKnight = async (address, id) => {
  try {
    const response = await fcl.query({
      cadence: GET_BORROW_KNIGHT,
      args: (arg, t) => [arg(address, t.Address), arg(id, t.UInt64)],
    });
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("Error borrow knight:", error);
    throw error;
  }
};
