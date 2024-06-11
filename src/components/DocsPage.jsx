import { useState } from "react";
import Header from "./Header";
import Image from "@/components/Image";
export default function DocsPage() {
  const data = {
    "module 1": ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4", "Lesson 5"],
    "module 2": ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"],
  };
  const [selectedModule, setSelectedModule] = useState(Object.keys(data)[0]);
  const [selectedLesson, setSelectedLesson] = useState(0);
  const handleLessonIncrement = (increment = 1) => {
    if (selectedLesson < data[selectedModule].length - 1 && increment > 0) {
      setSelectedLesson(selectedLesson + increment);
    }
    if (selectedLesson > 0 && increment < 0) {
      setSelectedLesson(selectedLesson + increment);
    }
  };
  const disableNext = selectedLesson === data[selectedModule].length - 1;
  const disablePrev = selectedLesson === 0;
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex px-6 py-4 gap-3 flex-1">
        {/* left meny */}
        <div className="flex-[2] flex gap-3 flex-col h-full w-full">
          <select
            defaultValue={selectedModule}
            className="outline-none flex uppercase text-base font-medium items-center justify-center border-2 flex-1 max-h-8 bg-accent w-full rounded-[10px] border-black  shadow2"
            onChange={(e) => {
              setSelectedModule(e.target.value);
              setSelectedLesson(0);
            }}
          >
            {Object.keys(data).map((module, index) => (
              <option className="text-center w-full" key={index} value={module}>
                {module}
              </option>
            ))}
          </select>
          <div className="border-2 flex-1 w-full rounded-[10px] border-black bg-bg2 shadow2 px-2 py-3 gap-3 flex flex-col items-center">
            {data[selectedModule].map((lesson, index) => (
              <button
                className={`w-full ${index == selectedLesson ? "bg-primary" : "bg-white"} flex flex-row  h-6 shadow1 rounded-[10px] items-center border-2 border-black gap-2`}
                key={index}
                onClick={() => {
                  setSelectedLesson(index);
                }}
              >
                <div className="h-6 flex items-center justify-center border-r-2 border-black w-6">
                  {index + 1}.
                </div>
                <h4 className="mt-[2px]"> {lesson}</h4>
              </button>
            ))}
          </div>
        </div>
        {/* info part */}
        <div className="flex-[4] flex gap-3 flex-col h-full w-full">
          <div className=" border-2 flex-1 w-full rounded-[10px] border-black  bg-white  shadow2"></div>
          <div className=" flex flex-row gap-3 flex-1 max-h-8 h-full w-full">
            <button
              disabled={disablePrev}
              className=" border-2 flex-1 max-h-8 h-full w-full rounded-[10px] border-black  bg-black shadow2 bg-opacity-40 flex items-center justify-center gap-2"
              onClick={() => handleLessonIncrement(-1)}
            >
              <Image
                src={"iconLongArrow.png"}
                className="h-[16px] w-[16px] rotate-180"
              />
              Previous
            </button>
            <button
              disabled={disableNext}
              className=" border-2 flex-1 max-h-8 h-full w-full rounded-[10px] border-black  bg-black bg-opacity-60 shadow2 flex items-center justify-center gap-2"
              onClick={() => handleLessonIncrement()}
            >
              Next
              <Image src={"iconLongArrow.png"} className="h-[16px] w-[16px]" />
            </button>
          </div>
        </div>
        {/* code part */}
        <div className="flex-[3] border-2 rounded-[10px] border-black h-full bg-secondary w-full shadow2"></div>
      </div>
      {/* footer */}
      <div className="w-full max-h-8 text-white px-6 bg-black flex-1 flex items-center text-opacity-60">
        @copyright CadenceFun
      </div>
    </div>
  );
}
