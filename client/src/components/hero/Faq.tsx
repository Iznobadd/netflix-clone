import { useEffect, useState } from "react";
import Plus from "../svg/Plus";
import { Question } from "../../interfaces";
import FormEmail from "./FormEmail";

const Faq = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  useEffect(() => {
    fetch("questions.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .then((error) => console.error(error));
  }, []);

  function showAnswer(index: number) {
    return () => {
      const updatedQuestions = [...questions];
      updatedQuestions[index].showAnswer = !updatedQuestions[index].showAnswer;
      setQuestions(updatedQuestions);
    };
  }

  return (
    <div className="min-h-[auto] relative flex justify-center text-white h-full box-border text-center py-[3.5rem] md:py-[4.5rem]">
      <div className="m-auto max-w-[calc(100%-3rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.33%-6rem)] 2xl:max-w-[calc(66.66%-6rem)] flex items-center flex-col text-center w-full">
        <div className="basis-1/2 z-[1] w-full">
          <h2 className="text-[2rem] lg:text-[3rem] lg:font-extrabold font-bold">
            Foire aux questions
          </h2>
          <div className="mt-[1.5rem]">
            <ul className="text-[1.125rem] lg:text-[1.5rem]">
              {questions.map((item, index) => (
                <li className="mb-[0.5rem]">
                  <h3 className="flex mb-[0.0.625rem] relative bg-[rgba(45,45,45,1)] text-white ">
                    <button
                      className="p-[1.5rem] appearance-none bg-none rounded-none w-full cursor-pointer flex justify-between items-center text-left"
                      onClick={showAnswer(index)}
                    >
                      <span>{item.question}</span>
                      <Plus />
                    </button>
                  </h3>
                  <div
                    className={
                      "overflow-hidden max-h-0 px-[1.5rem] text-left bg-[rgba(45,45,45,1)] text-white " +
                      (item.showAnswer
                        ? "max-h-[75rem] visible py-[1.5rem] "
                        : "collapse")
                    }
                  >
                    <span
                      className={
                        "text-left text-white " +
                        (item.showAnswer ? "visible" : "collapse")
                      }
                    >
                      {item.answer}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-[2.85rem]">
              <div className="text-center box-border max-w-[61.5rem] mx-auto px-[1.5rem] md:px-[2rem]">
                <FormEmail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
