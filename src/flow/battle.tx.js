export const FIGHT = `
import CryptoKnight from 0xCryptoKnight

transaction(userA:Address, userAKnightId: UInt64, userB:Address, userBKnightId: UInt64){
    prepare(signer:AuthAccount){
        Knight.battle(userA: userA, userAKnightId: userAKnightId, userB: userB, userBKnightId: userBKnightId)
    }
}`;
