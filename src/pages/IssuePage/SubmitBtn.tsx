const SubmitBtn = ({ typeIssuelName, onClick, disabled }) => {
  return (
    <>
      {typeIssuelName === "" ? (
        <button
          disabled={true}
          onClick={onClick}
          type="submit"
          className="text-[#ffffff] bg-[#94d3a2] w-full text-center font-semibold h-[32px] mt-[24px] text-[14px] rounded-[6px] border border-solid border-[#d0d7de] md:block md:w-[145px] md:h-[32px] md:mt-auto"
        >
          Submit new issue
        </button>
      ) : (
        <button
          disabled={false}
          onClick={onClick}
          type="submit"
          className="text-[#ffffff] bg-[#2da441] w-full text-center font-semibold h-[32px] mt-[24px] text-[14px] rounded-[6px] border border-solid border-[#d0d7de] md:block md:w-[145px] md:h-[32px] md:mt-auto"
        >
          Submit new issue
        </button>
      )}
    </>
  );
};

export default SubmitBtn;
