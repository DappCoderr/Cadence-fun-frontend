import { useEffect, useState } from "react";
import useCurrentUser from "./useCurrentUser";
import { checkKnightCollection } from "../flow/checkCollection.script";
import { borrowKnight } from "../flow/borrowKnight.script";
import { getId } from "../flow/getID.script";

export default function useKnightInfo() {
  const [currentUser] = useCurrentUser();
  const [hasKnight, setHasKnight] = useState(false);
  const [knightInfo, setKnightInfo] = useState({});
  const [id, setId] = useState(null);
  const address = currentUser?.addr;
  useEffect(() => {
    checkKnightCollection(address).then((result) => {
      console.log("result", result);
      setHasKnight(result);
    });
  }, [address]);

  const handleBorrowKnight = async (idd = id) => {
    if (!idd) return;
    return borrowKnight(address, idd).then((result) => {
      // console.log("borrowKnight result", result);
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
      console.log("You have a knight!");
      let idd = id || null;
      if (!idd) {
        // get id
        getId(address).then((res) => {
          console.log("id", res);
          if (Array.isArray(res) && res.length > 0) idd = res[0];
          setId(idd);
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
  };
}
