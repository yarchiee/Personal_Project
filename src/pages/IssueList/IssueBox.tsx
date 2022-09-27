const IssueBox = () => {
  return (
    <>
      <div className=" rounded-none sm:rounded-md border border-solid border-[#d0d7de] ">
        <div className="rounded-tl-md rounded-tr-md bg-[#f6f8fa] p-[16px] flex justify-between">
          <h2 className="hidden lg:block">state</h2>
          <div className="flex justify-between sm:justify-start lg:justify-end grow text-sm text-[#57606a]">
            <div className="px-[16px]">
              Author
              <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
            </div>
            <div className="px-[16px]">
              Label
              <span className="hidden sm:inline-block align-middle border-solid border-x-4 border-t-4 border-x-transparent border-b-transparent ml-1"></span>
            </div>
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
