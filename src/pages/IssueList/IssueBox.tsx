import FilterDropList from "./FilterDropList";
import { CheckIcon, IssueOpenedIcon } from "@primer/octicons-react";

const IssueBox = () => {
  return (
    <>
      <div className=" rounded-none sm:rounded-md border border-solid border-[#d0d7de] ">
        <div className="rounded-tl-md rounded-tr-md bg-[#f6f8fa] p-[16px] flex justify-between">
          <h2 className="hidden lg:block">
            <div className=" text-[14px] text-center lg:block">
              <a href="#/">
                <IssueOpenedIcon size={16} className="mr-1" />
                <span className="font-semibold">5 Open</span>
              </a>
              <a href="#/" className="ml-2.5">
                <CheckIcon size={16} className="fill-fg-muted mr-1" />
                <span> 1 Closed</span>
              </a>
            </div>
          </h2>
          <div className="flex justify-between sm:justify-start lg:justify-end grow text-sm text-[#57606a]">
            <div className="px-[16px]">
              Author
              <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
            </div>

            <details className="px-[16px] flex">
              <summary className="flex items-center">
                Label
                <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
              </summary>
              <FilterDropList />
            </details>

            <div className="px-[16px] hidden md:block">
              Projects
              <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
            </div>
            <div className="px-[16px] hidden md:block">
              Milestones
              <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
            </div>
            <div className="px-[16px]">
              Assignee
              <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
            </div>
            <div className="px-[16px]">
              Sort
              <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IssueBox;
