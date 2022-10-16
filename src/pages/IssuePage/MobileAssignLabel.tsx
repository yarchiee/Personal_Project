import LabelTag from "../../components/LabelTag";
const MobileAssignLabel = ({ perIssueData }) => {
  return (
    <>
      <div className="h-[73.6px] mb-[24px] border border-solid  border-b-[hsla(210,18%,87%,1)] border-l-0 border-r-0  border-t-0  ">
        <div className="flex mb-[16px]">
          <span className="w-1/6 font-semibold">Assignees</span>
          <div className="flex">
            {perIssueData?.assignees.map((item) => (
              <a href="#/">
                <img
                  key={item?.avatar_url}
                  src={`${item?.avatar_url}`}
                  alt=""
                  className="w-[20px] h-[20px] rounded-[50%] mr-[5px] border border-solid border-[#d0d7de]"
                />{" "}
              </a>
            ))}
          </div>
        </div>
        <div className="flex mb-[16px]">
          <span className="w-1/6 font-semibold">Labels</span>
          <div className="flex">
            {perIssueData?.labels.map((item) => (
              <LabelTag
                key={item.name}
                selectdLabel={item.name}
                selectedLabelColor={item.color}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileAssignLabel;
