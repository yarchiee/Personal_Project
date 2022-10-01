import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";

export default function Pagination({ currentpage, setCurrentPage }) {
  const nextPage = () => {
    setCurrentPage(currentpage + 1);
  };
  const previousPage = () => {
    setCurrentPage(currentpage - 1);
  };
  return (
    <div className="flex justify-center items-center text-sm my-4 px-1">
      <a
        href="#/"
        className="place-items-center grid-flow-col	text-[#8c959f] flex items-center py-5px px-2.5 border border-solid border-transparent hover:border-primary-border hover:rounded-md"
      >
        <ChevronLeftIcon size={16} className="mr-1" />
        <span onClick={previousPage}>Previous</span>
      </a>
      <a
        href="#/"
        className=" place-items-center grid-flow-col text-[#0969da] flex items-center py-5px px-2.5 border border-solid border-transparent hover:border-primary-border hover:rounded-md"
      >
        <span onClick={nextPage}>Next</span>
        <ChevronRightIcon size={16} className="ml-1" />
      </a>
    </div>
  );
}
