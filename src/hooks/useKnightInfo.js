import { useEffect, useState } from "react";
import useCurrentUser from "./useCurrentUser";
import { checkKnightCollection } from "../flow/checkCollection.script";
import { borrowKnight } from "../flow/borrowKnight.script";

export default function useKnightInfo() {
  const [currentUser] = useCurrentUser();
  const [hasKnight, setHasKnight] = useState(false);
  const [knightInfo, setKnightInfo] = useState(null);
  useEffect(() => {
    checkKnightCollection(currentUser?.addr).then((result) => {
      console.log("result", result);
      setHasKnight(result);
    });
  }, [currentUser?.addr]);

  useEffect(() => {
    if (hasKnight) {
      console.log("You have a knight!");
      borrowKnight(currentUser?.addr, 194613558180905).then((result) => {
        // console.log("borrowKnight result", result);
        if (!result) return;
        setKnightInfo({
          wins: result.winCount,
          attack: result.xp,
          name: result.name,
          type: result.type,
        });
      });
    }
  }, [hasKnight]);
  return {
    knightInfo,
    hasKnight,
    currentUser,
  };
}
