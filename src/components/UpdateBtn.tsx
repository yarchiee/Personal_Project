const UpdateBtn = ({ onClick, disabled }) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        type="submit"
        className="text-[#ffffff] text-center font-semibold h-[32px]  text-[14px] rounded-[6px] border border-solid border-[#d0d7de]  w-[145px] bg-[#2c974b]"
      >
        Update comment
      </button>
    </>
  );
};

export default UpdateBtn;
