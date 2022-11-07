const SaveBtn = ({ onClick }) => {
  return (
    <>
      <button
        onClick={() => onClick && onClick()}
        className=" text-[12px] bg-[#F6F8FA] text-[#24292f] font-semibold border  border-solid border-secondary-border py-[5px] px-[16px] h-[32px] whitespace-nowrap rounded-md hover:bg-[
#EAEEF2]"
      >
        <span>Save</span>
      </button>
    </>
  );
};

export default SaveBtn;
