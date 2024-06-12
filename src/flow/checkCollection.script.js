export const GET_COLLECTION_LENGTH = `
import CryptoKnight from 0xCryptoKnight

pub fun main(addr:Address): Bool{
    let account = getAuthAccount(addr)
    return account.getCapability<&{Knight.KnightCollectionPublic}>(Knight.PublicPath).check()
}`;
