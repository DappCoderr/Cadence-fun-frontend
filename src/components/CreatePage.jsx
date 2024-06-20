import { useState } from "react";
import GameBackground from "./GameBackground";
import Header from "./Header";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { createKnight } from "../flow/createKnight.tx";
import { colorFunc, colorsType } from "../constants";

export default function CreatePage() {
  const data = ["rock", "fire", "sun", "moon"];
  const [name, setName] = useState("");
  const [type, setType] = useState(0);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter a name");
      return;
    }
    console.log("name", name, "type", type);
    const res = await createKnight(name, String(type));
    console.log("knight created?", res);
    navigate("/game");
  };
  return (
    <>
      <Header />
      <GameBackground className={""}>
        <form
          name="characterForm"
          className="max-w-52 w-full h-full items-center justify-center flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-4 text-center">Create Your Character</h2>
          <input
            type="text"
            defaultValue={name}
            className="w-full border-black border-2 rounded-[10px] shadow2  text-base text-left font-medium items-center justify-center bg-white px-3 py-3 max-h-8 outline-none flex"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter your name"
          />
          <select
            defaultValue={type}
            className="px-3  outline-none flex uppercase text-base font-medium items-center justify-center border-2 flex-1  bg-accent w-full rounded-[10px] max-h-8 border-black  shadow2"
            style={{ background: colorFunc(colorsType[type]) }}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            {data.map((element, index) => (
              <option className=" w-full" key={index} value={index}>
                {element}
              </option>
            ))}
          </select>
          <Button
            type="submit"
            className={"text-base w-full h-8 bg-yellow mt-4"}
            // onClick={handleSubmit}
          >
            Create Character
          </Button>
        </form>
      </GameBackground>
    </>
  );
}
