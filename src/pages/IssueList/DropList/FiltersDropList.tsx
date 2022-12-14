import { XIcon, CheckIcon } from "@primer/octicons-react";
const labelslist = [
  {
    state: "Open issues and pull requests",
    input: "is:open",
  },
  {
    state: "Your Issues",
    input: "is:open is:issue author:@me",
  },
  {
    state: "Your pull requests",
    input: "is:open is:pr author:@me ",
  },
  {
    state: "Everything assigned to you",
    input: "is:open assignee:@me ",
  },
  {
    state: "Everything mentioned you",
    input: "is:open mentions:@me",
  },
];
const FilterDropList = ({ setQuery, query, clearStatus, setClearStatus }) => {
  return (
    <>
      <div className="sm:relative">
        <div className="text-[14px] sm:text-[12px]">
          <div className="  fixed top-0 left-0 right-0 bottom-0 flex p-4 flex-col z-[100] sm:z-[1] sm:absolute sm:top-auto sm:right-auto sm:left-[-11px] sm:bottom-auto sm:p-0 lg:left-[-11px]">
            <div className="h-4/5 mt-0 bg-[#ffffff] border border-solid border-[rgba(0,0,0,0)] rounded-xl sm:border-[hsla(210,18%,87%,1)] sm:h-auto sm:max-h-[480px] sm:mt-2 sm:w-[300px]">
              <header className="flex p-4 items-center border-b border-solid border-b-[hsla(210,18%,87%,1)] sm:pt-[7px] sm:pr-[7px] sm:pb-[7px]">
                <span className="font-semibold flex-1">Filters Issues</span>
                <button className="cursor-pointer p-4 m-[-16px] leading-none rounded-none">
                  <XIcon fill={"#57606a"} />
                </button>
              </header>

              <div className="overflow-y-auto max-h-[calc(100%-126px)] sm:max-h-[calc(485px-82px)]">
                {labelslist.map((element, index) => {
                  return (
                    <a
                      href="#/"
                      className={`flex items-start w-full p-4 overflow-hidden text-[#24292f] text-left cursor-pointer border-b ${
                        labelslist.length - 1 !== index
                          ? "border-solid"
                          : "border-none"
                      } hover:bg-[rgba(234,238,242,0.5)] border-b-[hsla(210,18%,87%,1)] sm:pt-[7px] sm:pb-[7px]`}
                      onClick={(e) => {
                        e.preventDefault();

                        setQuery([element.input]);
                        setClearStatus(true);
                      }}
                    >
                      <div className="flex items-start mr-2">
                        <CheckIcon fill={"#ffffff"} />
                      </div>
                      <span
                        className={`${element.state} mt-px rounded-[2em] w-[1em] h-[1em] mr-2 text-[14px]`}
                      />
                      <div className="leading-tight min-w-0">
                        <div className="flex items-center">
                          <div className="font-semibold text-[#24292f] truncate sm:pt-[2px]">
                            {element.state}
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterDropList;
