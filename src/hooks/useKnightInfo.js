import { useEffect, useState } from "react";
import useCurrentUser from "./useCurrentUser";
import { checkKnightCollection } from "../flow/checkCollection.script";
import { borrowKnight } from "../flow/borrowKnight.script";
import { getId } from "../flow/getID.script";

export default function useKnightInfo() {
  const [currentUser] = useCurrentUser();
  const [loadingKnight, setLoadingKnight] = useState(true);
  const [hasKnight, setHasKnight] = useState(false);
  const [knightInfo, setKnightInfo] = useState({});
  const [knightId, setKnightId] = useState(null);
  const address = currentUser?.addr;
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
      // console.log("borrowKnight result", result);
      setLoadingKnight(false);
      if (!result) return;
      setKnightInfo({
        wins: result.winCount,
        attack: result.xp,
        name: result.name,
        type: result.type,
      });
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
          if (Array.isArray(res) && res.length > 0) idd = res[0];
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
