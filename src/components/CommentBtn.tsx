const CommentBtn = ({ onClick, disabled }) => {
  return (
    <>
      <button
        disabled={false}
        onClick={onClick}
        type="submit"
        className="text-[#ffffff] bg-[#2da441] text-center font-semibold  text-[14px] rounded-[6px] border border-solid border-[#d0d7de]  w-[97px] h-[32px] ml-auto "
      >
        Comment
      </button>
    </>
  );
};

export default CommentBtn;
