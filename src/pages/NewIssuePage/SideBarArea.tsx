import { GearIcon } from "@primer/octicons-react";
import PopOverList from "../../components/PopOverList";
const SideBarArea = () => {
  return (
    <div className="md:w-[390px] lg:w-[340px]">
      <div className="pt-[16px]">
        <details className="group">
          <summary className="flex text-[#57606a] hover:text-[#0969da] list-none font-semibold justify-between py-[4px] mb-[4px] group-hover:text-[#0969da] ">
            Assignees
            <GearIcon
              size={16}
              className="text-[#57606a] group-hover:text-[#0969da] cursor-pointer"
            />
          </summary>
          <PopOverList />
        </details>
        No one -{" "}
        <button className="hover:text-[#0969da]">assign yourself</button>
      </div>
      <div className="pt-[16px] mt-[16px] border border-solid border-t-[hsla(210,18%,87%,1)] border-l-0 border-r-0 border-b-0">
        <details className="group">
          <summary className="flex text-[#57606a]  list-none font-semibold justify-between py-[4px] mb-[4px] group-hover:text-[#0969da]">
            Labels
            <GearIcon
              size={16}
              className="text-[#57606a] group-hover:text-[#0969da] cursor-pointer"
            />
          </summary>
          <PopOverList />
        </details>
        None yet
      </div>
      <div className="pt-[16px] mt-[16px] border border-solid border-t-[hsla(210,18%,87%,1)] border-l-0 border-r-0 border-b-0">
        <details className="group">
          <summary className="flex text-[#57606a]  list-none font-semibold justify-between py-[4px] mb-[4px] group-hover:text-[#0969da]">
            Helpful resources
          </summary>
        </details>
        <a href="/" className="text-[#0969da]">
          Github Community Guidelines
        </a>
      </div>
      <div className="mt-[16px] border border-solid border-t-[hsla(210,18%,87%,1)] border-l-0 border-r-0 border-b-0 "></div>
    </div>
  );
};

export default SideBarArea;
