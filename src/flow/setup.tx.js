import * as fcl from "@onflow/fcl";

const SETUP_COLLECTION = `
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

export async function setUpNewCollection() {
  try {
    const response = await fcl.mutate({
      cadence: SETUP_COLLECTION,
      payer: fcl.authz,
      proposer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 999,
    });
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("Error while setting up new collection:", error);
    throw error;
  }
}
