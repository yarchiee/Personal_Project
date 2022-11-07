const AuthorTag = ({ data }) => {
  return (
    <>
      {data?.author_association !== "NONE" && (
        <div
          className={` text-[12px] bg-[#F6F8FA] text-[#57606a] font-semibold border  border-solid ${
            data?.author_association === "OWNER"
              ? "border-[#54AEFF66]"
              : "border-secondary-border"
          }  px-[7px] h-[20px] whitespace-nowrap rounded-[16px] bg-transparent ml-[4px] leading-[19px]`}
        >
          <span>{data ? data.author_association.toLowerCase() : ""}</span>
        </div>
      )}
    </>
  );
};

export default AuthorTag;
