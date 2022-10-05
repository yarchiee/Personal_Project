import SubmitBtn from "./SubmitBtn";
import SideBarArea from "./SideBarArea";
import EditArea from "./EditArea";

function NewIssuePage() {
  return (
    <div className="mt-[24px] px-[16px] md:flex  md:px-[32px] ">
      <img
        src="https://avatars.githubusercontent.com/u/105163825?s=80&v=4"
        alt=""
        className=" hidden md:rounded-[50%] md:w-[40px] md:h-[40px] md:block md:mr-[15px] md:border md:border-solid md:border-[#d0d7de]"
      />

      <EditArea />
      <SideBarArea />
      <SubmitBtn />
    </div>
  );
}

export default NewIssuePage;
