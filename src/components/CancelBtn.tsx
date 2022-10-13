const CancelBtn = ({ onClick, disabled }) => {
  return (
    <>
      <button
        disabled={false}
        onClick={onClick}
        type="submit"
        className="text-[#cf222e] bg-[#f6f8fa] w-[75px] text-center font-semibold   text-[14px] rounded-[6px] border border-solid border-[#d0d7de]   h-[32px] mt-auto mr-[5px]"
      >
        Cancel
      </button>
    </>
  );
};

export default CancelBtn;
