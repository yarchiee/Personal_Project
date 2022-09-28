import { SearchIcon } from "@primer/octicons-react";
import FilterDropList from "./DropList/FiltersDropList";

const FilterInput = () => {
  return (
    <>
      <div className="flex w-full  md:order-first md:w-auto md:mt-0 md:grow ">
        <details className=" h-[32px] text-primary-text bg-primary-bg border border-solid border-secondary-border shadow-shadow py-[9px] px-16px  font-medium px-4 rounded-l-md hover:bg-[#f3f4f6] border-r-0">
          <summary className="flex items-center">
            Filters
            <span className="inline-block w-0 h-0 ml-1 mt-1 border-transparent border-t-fg-muted border-solid border-4 border-b-0 content-str"></span>
          </summary>
          <FilterDropList />
        </details>
        <div className="relative w-full">
          <SearchIcon
            size={16}
            className="absolute left-2 top-9px fill-fg-muted mx-[5px]"
          />
          <input
            type="text"
            placeholder="Search all issues"
            value="is:issue is:open"
            className="bg-primary-bg h-[32px] py-[5px] pl-[32px] pr-3 border border-solid border-secondary-border rounded-r-md shadow-input-shadow w-full text-fg-muted focus:outline-none   "
          ></input>
        </div>
      </div>
    </>
  );
};

export default FilterInput;
