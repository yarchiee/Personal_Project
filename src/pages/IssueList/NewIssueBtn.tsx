const NewIssueBtn = ({ onClick }) => {
  return (
    <>
      <button
        onClick={() => onClick && onClick()}
        className="bg-btn-primary-bg text-white font-semibold border  border-solid border-secondary-border py-[5px] px-[16px] h-[32px] whitespace-nowrap rounded-md ml-[16px] hover:bg-[#2c974b]"
      >
        <span className="hidden md:block">New issue</span>
        <span className="md:hidden">New</span>
      </button>
    </>
  );
};

export default NewIssueBtn;
