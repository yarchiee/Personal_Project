import { IssueOpenedIcon } from "@primer/octicons-react";

const NoResult = () => {
  return (
    <>
      <div className=" h-[300px] border border-solid border-[#d0d7de] w-full flex justify-center flex-col">
        <IssueOpenedIcon className="ml-auto mr-auto " />
        <div className="text-[#24292f] text-[24px] font-semibold text-center mt-[30px] ">
          No results matched your search.{" "}
          <div className="text-[14px] text-[#57606a] font-extralight mt-[15px] tracking-wider">
            You could search{" "}
            <a href="/#" className="text-[#0969da]">
              all of GitHub
            </a>{" "}
            or try an
            <a href="/#" className="text-[#0969da]">
              {" "}
              advanced search
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default NoResult;
