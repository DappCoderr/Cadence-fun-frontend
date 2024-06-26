import { useState } from "react";
import Confetti from "react-confetti";
import Header from "./Header";
import Image from "@/components/Image";
import Button from "@/components/Button";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";
import remarkGfm from "remark-gfm";

SyntaxHighlighter.registerLanguage("jsx", jsx);

export default function DocsPage() {
  const data = {
    "Module 1": ["Lesson 1", "Lesson 2", "Lesson 3"],
    "Module 2": [
      "Lesson 1",
      "Lesson 2",
      "Lesson 3",
      "Lesson 4",
      "Lesson 5",
      "Lesson 6",
      "Lesson 7",
      "Lesson 8",
      "Lesson 9",
      "Lesson 10",
      "Lesson 11",
      "Lesson 12",
      "Lesson 13",
      "Lesson 14",
      "Lesson 15",
    ],
    "Module 3": [
      "Lesson 1",
      "Lesson 2",
      "Lesson 3",
      "Lesson 4",
      "Lesson 5",
      "Lesson 6",
      "Lesson 7",
      "Lesson 8",
      "Lesson 9",
    ],
    "Module 4": [
      "Lesson 1",
      "Lesson 2",
      "Lesson 3",
      "Lesson 4",
      "Lesson 5",
      "Lesson 6",
      "Lesson 7",
      "Lesson 8",
      "Lesson 9",
      "Lesson 10",
    ],
    "Module 5": [
      "Lesson 1",
      "Lesson 2",
      "Lesson 3",
      "Lesson 4",
      "Lesson 5",
      "Lesson 6",
      "Lesson 7",
      "Lesson 8",
    ],
  };

  const [selectedModule, setSelectedModule] = useState(Object.keys(data)[0]);
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [content, setContent] = useState("");
  const [test, setTest] = useState(null);
  const [solution, setSolution] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [runConfetti, setRunConfetti] = useState(false);
  const [showModel, setShowModel] = useState(false);
  console.log("showModel", showModel);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleLessonIncrement = (increment = 1) => {
    if (selectedLesson < data[selectedModule].length - 1 && increment > 0) {
      setSelectedLesson(selectedLesson + increment);
    } else if (
      selectedLesson == data[selectedModule].length - 1 &&
      increment > 0
    ) {
      setSelectedModule(
        Object.keys(data)[Object.keys(data).indexOf(selectedModule) + 1]
      );
      console.log("going to new module", showModel);
      setShowModel(true);
      setSelectedLesson(0);
      setRunConfetti(true);
      setShowConfetti(true);
    } else if (selectedLesson > 0 && increment < 0) {
      setSelectedLesson(selectedLesson + increment);
    } else if (selectedLesson == 0 && increment < 0) {
      const newModule =
        Object.keys(data)[Object.keys(data).indexOf(selectedModule) - 1];
      setSelectedModule(newModule);
      console.log("newModule", newModule);
      setSelectedLesson(data[newModule].length - 1);
    }
    setShowSolution(false);
  };

  const disableNext =
    selectedLesson == data[selectedModule].length - 1 &&
    Object.keys(data).indexOf(selectedModule) == Object.keys(data).length - 1;
  const disablePrev =
    selectedLesson == 0 && Object.keys(data).indexOf(selectedModule) == 0;
  const basePath = `/modules/${selectedModule}/`;
  useEffect(() => {
    fetch(basePath + `${data[selectedModule][selectedLesson]}.md`)
      .then((response) => response.text())
      .then((text) => {
        if (!text || typeof text != "string") return;
        if (text.includes("404: Not Found")) {
          return;
        }
        // console.log("text recieved from file", path, text);
        let a = text.toLowerCase().split(/put it to the test/i);
        let test = "";
        let solution = "";
        let content = "";
        if (a.length === 2) {
          content = a[0];
          a = a[1].toLowerCase().split(/solution !!/i);
          if (a.length === 2) {
            test = a[0];
            solution = a[1];
          } else {
            test = a[0];
          }
        } else {
          content = a[0];
        }
        if (test.startsWith(":**")) {
          test = test.slice(3);
        }
        setContent(content);
        setTest(test);
        setSolution(solution);
      });
  }, [selectedLesson, selectedModule]);
  return (
    <div className="h-screen flex flex-col w-screen relative">
      <Confetti
        recycle={showConfetti}
        run={runConfetti}
        numberOfPieces={200}
        onConfettiComplete={(confetti) => {
          console.log("confetti completed", confetti);
          if (!showConfetti) {
            console.log("setting run confetti to false");
            setRunConfetti(false);
          }
        }}
      />
      {/* modal */}
      {showModel && (
        <div
          onClick={() => {
            setShowModel(false);
            setShowConfetti(false);
          }}
          className="absolute  top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-40 flex items-center justify-center"
        >
          <div className=" min-h-48 min-w-52 p-4 bg-white shadow-2xl flex items-center justify-center flex-col gap-3 text-center rounded-[10px] z-50 border-2 border-black">
            <Image src="win.gif" className="h-20 " />
            <div className="flex flex-col items-center gap-1">
              <h4 className="w-2/3 capitalize leading-5">
                congratulations! You completed the module
              </h4>
              <p className="text-opacity-50 text-black text-xs">
                (Click anywhere to close)
              </p>
            </div>
          </div>
        </div>
      )}
      <Header />
      <div className="flex  px-6 py-4 gap-3 flex-1 max-h-[calc(100%-90px)] w-full">
        {/* left meny */}
        <div className=" max-w-[20%] flex gap-3 flex-col h-full w-full">
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            value={selectedModule}
            className="outline-none relative flex uppercase font-medium items-center justify-center border-2 flex-1 max-h-8 bg-accent w-full rounded-[10px] border-black  text-lg shadow2"
            onChange={(e) => {
              setSelectedModule(e.target.value);
              setSelectedLesson(0);
            }}
          >
            {selectedModule}
            <div
              className={`${
                showDropdown ? "" : "hidden"
              } absolute top-8 bg-white w-[105%]  border-black  border-2 shadow-2xl rounded-[10px] p-1`}
            >
              {Object.keys(data).map((module, index) => (
                <div
                  onClick={() => {
                    setShowSolution(false);
                    setSelectedModule(module);
                    setSelectedLesson(0);
                    setShowDropdown(false);
                  }}
                  className="text-center w-full text-opacity-40 text-black hover:text-opacity-100 p-1 rounded-lg hover:bg-accent hover:text-black cursor-pointer"
                  key={index}
                >
                  {module}
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-y-auto border-2 flex-1 w-full rounded-[10px] border-black bg-bg2 shadow2 px-2 py-3 gap-3 flex flex-col items-center">
            {data[selectedModule].map((lesson, index) => (
              <button
                className={`w-full ${
                  index == selectedLesson ? "bg-primary" : "bg-white"
                } flex flex-row  h-6 shadow1 rounded-[10px] items-center border-2 border-black gap-2`}
                key={index}
                onClick={() => {
                  setShowSolution(false);
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
        <div
          className={` ${
            test ? "max-w-[50%]" : ""
          }  flex gap-3 flex-col h-full w-full`}
        >
          <div className="p-3 overflow-y-auto border-2 flex-1 w-full rounded-[10px] border-black  bg-white  shadow2">
            {content && <Markdown path={basePath}>{content}</Markdown>}
          </div>
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
        {test && (
          <div className="max-w-[30%] relative border-2 rounded-[10px] border-black  h-full bg-secondary overflow-auto w-full shadow2 p-3">
            <h2 className="mb-4 mt-2">
              {solution && showSolution ? "Solution" : "Put it to the test"}
            </h2>
            <Markdown path={basePath} isSolution={solution}>
              {solution && showSolution ? solution : test}
            </Markdown>
            {solution && (
              <Button
                onClick={() => {
                  setShowSolution(!showSolution);
                }}
                className="bg-white absolute top-2 right-2 flex flex-col px-2 !gap-1 font-normal text-xs py-[8px]"
              >
                <Image src={"iconHint.png"} className="h-4 w-4" />
                {/* {showSolution ? "Hide" : "Hint"} */}
              </Button>
            )}
          </div>
        )}
      </div>
      {/* footer */}
      <div className="flex-shrink-0 w-full max-h-8 text-lg text-white px-6 bg-black flex-1 flex items-center justify-center text-opacity-60">
        Made by love from
        <a className="pl-1 text-white" href="https://x.com/dappcoder_">
          DC
        </a>
      </div>
    </div>
  );
}

const Markdown = ({ children, path, isSolution }) => {
  if (!children) {
    return <></>;
  }
  return (
    <>
      <ReactMarkdown
        components={{
          a({ node, ...props }) {
            return <a className="text-red font-semibold" {...props} />;
          },
          img({ src, ...props }) {
            return (
              <img
                className="rounded-[10px] border-2 border-black"
                src={path + src}
                {...props}
              />
            );
          },
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            // console.log("match", inline, className, props, children);
            return !inline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                style={prism}
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className + " bg-red"} {...props}>
                {children}
              </code>
            );
          },
        }}
        className={"markdown " + (isSolution ? "solution" : "")}
        remarkPlugins={[remarkGfm]}
      >
        {children}
      </ReactMarkdown>
    </>
  );
};
