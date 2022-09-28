import {
  CheckIcon,
  IssueOpenedIcon,
  MilestoneIcon,
  SearchIcon,
  TagIcon,
} from "@primer/octicons-react";

function LabelHeader() {
  return (
    <div className="mt-6 px-6 flex flex-wrap justify-between text-sm max-w-7xl mx-auto">
      <div className="flex flex-wrap w-full md:flex-nowrap md:h-8 md:mb-4">
        <div className="flex w-full justify-between md:flex-nowrap md:w-auto">
          {/* <div className="flex text-primary-text md:ml-auto md:pl-2">
            <div>
              <button className="py-5px px-4 border border-solid borderrounded-l-md border-primary-border rounded-l-md flex items-center hover:bg-[#f3f4f6]">
                <TagIcon size={16} className="left-2 top-9px" />
                <span className="mx-3px">Labels</span>
                <span className="px-1.5 bg-neutral-muted border border-solid border-counter-border rounded-[2em] text-xs font-medium	leading-18px text-primary-text text-center hidden md:block">
                  7
                </span>
              </button>
            </div>
            <div>
              <button className="py-5px px-4 border border-solid borderrounded-l-md border-primary-border rounded-r-md flex flex-nowrap hover:bg-[#f3f4f6]">
                <MilestoneIcon size={16} className="left-2 top-9px" />
                <span className="mx-3px">MileStones</span>
                <span className="px-1.5 bg-neutral-muted border border-solid border-counter-border rounded-[2em] text-xs font-medium	leading-18px text-primary-text text-center hidden md:block">
                  0
                </span>
              </button>
            </div>
          </div> */}
          {/* <button className="bg-btn-primary-bg text-white border border-solid border-secondary-border py-5px px-4 font-medium whitespace-nowrap rounded-md ml-4 hover:bg-[#2c974b]">
            <span className="hidden md:block">New issue</span>
            <span className="md:hidden">New</span>
          </button> */}
        </div>
        <div className="flex w-full my-6 md:order-first md:w-auto md:mt-0 md:grow">
          <button className="flex items-center h-8 text-primary-text bg-primary-bg border border-solid border-secondary-border shadow-shadow py-5px px-16px  font-medium py-5px px-4 rounded-l-md hover:bg-[#f3f4f6]">
            Filters
            <span className="inline-block w-0 h-0 ml-1 mt-1 border-transparent border-t-fg-muted border-solid border-4 border-b-0 content-str"></span>
          </button>
          <div className="relative w-full">
            <SearchIcon
              size={16}
              className="absolute left-2 top-9px fill-fg-muted"
            />
            <input
              type="text"
              placeholder="Search all issues"
              value="is:issue is:open"
              className="bg-primary-bg py-5px pl-8 pr-3 border border-solid border-secondary-border rounded-r-md shadow-input-shadow w-full text-fg-muted"
            ></input>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <a href="#/">
          <IssueOpenedIcon size={16} className="mr-1" />
          <span className="font-semibold">5 Open</span>
        </a>
        <a href="#/" className="ml-2.5">
          <CheckIcon size={16} className="fill-fg-muted mr-1" />
          <span> 1 Closed</span>
        </a>
      </div>
    </div>
  );
}
export default LabelHeader;
