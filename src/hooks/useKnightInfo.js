import { useEffect, useState } from "react";
import useCurrentUser from "./useCurrentUser";
import { checkKnightCollection } from "../flow/checkCollection.script";
import { borrowKnight } from "../flow/borrowKnight.script";
import { getId } from "../flow/getID.script";
import { colorsTheme } from "../constants";

export default function useKnightInfo(isAdmin = false, addr) {
  const [currentUser] = useCurrentUser();
  const [loadingKnight, setLoadingKnight] = useState(true);
  const [hasKnight, setHasKnight] = useState(false);
  const [knightInfo, setKnightInfo] = useState({});
  const [knightId, setKnightId] = useState(null);
  const address = addr || currentUser?.addr;
  const randomFromMinMan = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  useEffect(() => {
    checkKnightCollection(address).then((result) => {
      console.log("result", result);
      setHasKnight(result);
    });
  }, [address]);

  const handleBorrowKnight = async (idd = knightId) => {
    if (!idd) {
      setLoadingKnight(false);
      return;
    }
    return borrowKnight(address, idd).then((result) => {
      console.log("borrowKnight result", result);
      setLoadingKnight(false);
      if (!result) return;
      const data = {
        wins: result.winCount,
        attack: result.xp,
        name: result.name,
        type:
          result.type?.length > 1
            ? colorsTheme.indexOf(result.type)
            : result.type,
      };
      if (isAdmin) {
        data.leftImg = "leftBorder2.png";
        data.rightImg = "rightBorder2.png";
        data.character = "angel";
        data.color = "light-brown";
      }
      setKnightInfo(data);
    });
  };
  useEffect(() => {
    if (hasKnight) {
      setLoadingKnight(true);
      console.log("You have a knight!");
      let idd = knightId || null;
      if (!idd) {
        // get id
        getId(address).then((res) => {
          console.log("id", res);
          if (!(Array.isArray(res) && res.length > 0)) return;
          if (isAdmin) idd = res[randomFromMinMan(0, res.length - 1)];
          else idd = res[0]; // get the first id
          setKnightId(idd);
          handleBorrowKnight(idd);
        });
        return;
      }
      handleBorrowKnight(idd);
    }
  }, [hasKnight, address]);
  return {
    knightInfo,
    hasKnight,
    currentUser,
    knightId,
    loadingKnight,
  };
}
