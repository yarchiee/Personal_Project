const UpdateBtn = ({ onClick, disabled }) => {
  return (
    <>
      <button
        disabled={true}
        onClick={onClick}
        type="submit"
        className="text-[#ffffff] bg-[#94d3a2] text-center font-semibold h-[32px]  text-[14px] rounded-[6px] border border-solid border-[#d0d7de]  w-[145px]  hover:bg-[#2c974b]"
      >
        Update comment
      </button>
    </>
  );
};

export default UpdateBtn;
