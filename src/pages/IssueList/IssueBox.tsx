import LabelDropList from "./DropList/LabelDropList";
import AssigneeDropList from "./DropList/AssigneeDropList";
import SortDropList from "./DropList/SortDropList";

import { CheckIcon, IssueOpenedIcon } from "@primer/octicons-react";
const IssueBox = ({
  isOpenIssue,
  labelData,
  setIsOpenIssue,
  setQuery,
  query,
  check,
  setCheck,
  clearStatus,
  setClearStatus,
}) => {
  const labelHeaderList = ["is:open", "is:closed"];
  return (
    <>
      <div className=" rounded-none sm:rounded-md border border-solid border-[#d0d7de] ">
        <div className="rounded-tl-md rounded-tr-md bg-[#f6f8fa] p-[16px] flex justify-between">
          <h2 className="hidden lg:block">
            <div className=" text-[14px] text-center lg:block">
              <a href="#/">
                <IssueOpenedIcon size={16} className="mr-1" />
                <span
                  onClick={() => {
                    let tmp = [...query];
                    tmp.forEach((element) => {
                      if (element.includes("close")) {
                        console.log("close", element);
                        tmp = tmp.filter((item) => item !== element);
                      }
                    });

                    setQuery([...tmp, labelHeaderList[0]]);
                  }}
                  className="font-semibold"
                >
                  Open
                </span>
              </a>
              <a href="#/" className="ml-2.5">
                <CheckIcon size={16} className="fill-fg-muted mr-1" />
                <span
                  onClick={() => {
                    let tmp = [...query];
                    tmp.forEach((element) => {
                      if (element.includes("open")) {
                        console.log("open", element);
                        tmp = tmp.filter((item) => item !== element);
                      }
                    });

                    setQuery([...tmp, labelHeaderList[1]]);
                  }}
                >
                  Closed
                </span>
              </a>
            </div>
          </h2>
          <div className="flex justify-between sm:justify-start lg:justify-end grow text-sm text-[#57606a]">
            <div className="px-[16px] cursor-pointer">
              Author
              <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
            </div>

            <details className="px-[16px] flex cursor-pointer">
              <summary className="flex items-center">
                Label
                <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
              </summary>
              <LabelDropList
                labelData={labelData}
                setQuery={setQuery}
                query={query}
                check={check}
                setCheck={setCheck}
                clearStatus={clearStatus}
                setClearStatus={setClearStatus}
              />
            </details>

            <div className="px-[16px] hidden md:block cursor-pointer">
              Projects
              <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
            </div>
            <div className="px-[16px] hidden md:block cursor-pointer">
              Milestones
              <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
            </div>
            <details className="px-[16px] cursor-pointer">
              <summary className="flex items-center">
                Assignee
                <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
              </summary>
              <AssigneeDropList
                isOpenIssue={isOpenIssue}
                setQuery={setQuery}
                query={query}
                clearStatus={clearStatus}
                setClearStatus={setClearStatus}
              />
            </details>
            <details className="px-[16px] cursor-pointer">
              <summary className="flex items-center">
                Sort
                <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
              </summary>
              <SortDropList
                setIsOpenIssue={setIsOpenIssue}
                setQuery={setQuery}
                query={query}
                clearStatus={clearStatus}
                setClearStatus={setClearStatus}
              />
            </details>
          </div>
        </div>
      </div>
    </>
  );
};

export default IssueBox;
