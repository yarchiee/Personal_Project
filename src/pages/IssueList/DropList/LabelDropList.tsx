import { XIcon, CheckIcon } from "@primer/octicons-react";
import { useState } from "react";

export default function LabelDropList({ labelData, setQuery, query }) {
  const [searchLabelInputText, setSearchLabelInputText] = useState("");
  return (
    <div className="sm:relative">
      <div className="text-[14px] sm:text-[12px]">
        <div className=" fixed top-0 left-0 right-0 bottom-0 flex p-4 flex-col z-[100] sm:z-[1] sm:absolute sm:top-auto sm:right-auto sm:left-auto sm:bottom-auto sm:p-0 lg:right-0">
          <div className="h-4/5 mt-0 bg-[#ffffff] border border-solid border-[rgba(0,0,0,0)] rounded-xl sm:border-[hsla(210,18%,87%,1)] sm:h-auto sm:max-h-[480px] sm:mt-2 sm:w-[300px]">
            <header className="flex p-4 items-center border-b border-solid border-b-[hsla(210,18%,87%,1)] sm:pt-[7px] sm:pr-[7px] sm:pb-[7px]">
              <span className="font-semibold flex-1">Filter by Label</span>
              <button className="cursor-pointer p-4 m-[-16px] leading-none rounded-none">
                <XIcon fill={"#57606a"} />
              </button>
            </header>
            <div className="p-4 m-0 border-b border-solid border-b-[hsla(210,18%,87%,1)] sm:p-2">
              <input
                placeholder="Filter labels"
                className="block w-full py-[5px] px-[12px] text-sm leading-5 rounded-md border border-solid border-[#d0d7de] focus:border focus:border-solid focus:border-[#0969da] focus:outline-none focus:shadow-innerblue"
                onChange={(e) => {
                  setSearchLabelInputText(e.target.value);
                }}
              />
            </div>
            <div className="overflow-y-auto max-h-[calc(100%-126px)] sm:max-h-[calc(485px-82px)]">
              <a
                href="#/"
                className="flex items-start w-full p-4 overflow-hidden text-[#24292f] text-left cursor-pointer border-b border-solid border-b-[hsla(210,18%,87%,1)] sm:pt-[7px] sm:pb-[7px]"
              >
                <div className="flex items-start mr-2">
                  <CheckIcon fill={"#ffffff"} />
                </div>
                <span className="font-semibold">Unlabeled</span>
              </a>
              {labelData.map((element, index) => {
                if (
                  searchLabelInputText &&
                  !element.name.includes(searchLabelInputText)
                )
                  return <></>;
                return (
                  <a
                    href="#/"
                    className={`flex items-start w-full p-4 overflow-hidden text-[#24292f] text-left cursor-pointer border-b ${
                      labelData.length - 1 !== index
                        ? "border-solid"
                        : "border-none"
                    } hover:bg-[rgba(234,238,242,0.5)] border-b-[hsla(210,18%,87%,1)] sm:pt-[7px] sm:pb-[7px]`}
                    onClick={() => {
                      console.log(element);
                      // setQuery(element.query);
                      // fetchSortData(element.input);
                      const tmp = [...query];
                      console.log(tmp);
                      if (query.includes("sort:")) {
                        console.log("sort");
                        // query.remove
                      }
                      setQuery([...tmp, `label:${element.name}`]);
                    }}
                  >
                    <div className="flex items-start mr-2">
                      <CheckIcon fill={"#000000"} />
                    </div>
                    <span
                      style={{ background: `#${element.color}` }}
                      className=" mt-px rounded-[2em] w-[1em] h-[1em] mr-2 text-[14px]"
                    />
                    <div className="leading-tight min-w-0">
                      <div className="flex items-center">
                        <div className="font-semibold text-[#24292f] truncate sm:pt-[2px]">
                          {element.name}
                        </div>
                        {element?.usercustomname !== "" ? (
                          <div className="font-normal text-[#57606a] ml-2 truncate sm:pt-[2px]">
                            {element.des}
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                      {element.des !== "" ? (
                        <div className="font-medium text-[#57606a] mt-1 truncate">
                          {element.des}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
