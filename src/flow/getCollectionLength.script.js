export const GET_COLLECTION_LENGTH = `
import NonFungibleToken from 0xNonFungibleToken
import CryptoKnight from 0xCryptoKnight

pub fun main(addr:Address): UInt64{
    let account = getAuthAccount(addr)
    let collectionRef = account.getCapability<&{Knight.KnightCollectionPublic}>(Knight.PublicPath).borrow() ?? panic("Could not borrow Collection")
    return collectionRef.getIDs().length
}`;
