export const SETUP_COLLECTION = `
import NonFungibleToken from 0xNonFungibleToken
import CryptoKnight from 0xCryptoKnight

transaction(){
  prepare(signer:AuthAccount){
    if signer.borrow<&Knight.Collection>(from: Knight.StoragePath) == nil{
      signer.save(<- Knight.createEmptyCollection(), to:Knight.StoragePath)
      signer.link<&{NonFungibleToken.CollectionPublic, Knight.KnightCollectionPublic}>(Knight.PublicPath, target: Knight.StoragePath)  
    }
  }
}`;
