import { IssueOpenedIcon } from "@primer/octicons-react";
import Input from "../../components/Input";
import NewIssueBtn from "../IssueList/NewIssueBtn";
import EditBtn from "../../components/EditBtn";
import SaveBtn from "../../components/SaveBtn";
import { useState } from "react";

const HeaderEdit = ({ onClick, perIssueData }) => {
  console.log(perIssueData);
  const [searchLabelInputText, setSearchLabelInputText] = useState("");
  const [openInput, setOpenInput] = useState(false);
  const toggleEdit = () => {
    setOpenInput(!openInput);
  };
  return (
    <>
      <div className="mb-[16px] h-[150px]">
        {openInput && (
          <Input
            type={"fetch"}
            searchLabelInputText={searchLabelInputText}
            setSearchLabelInputText={setSearchLabelInputText}
          />
        )}
        <div>
          <div className="mb-[16px] flex">
            {!openInput && (
              <div>
                <EditBtn onClick={toggleEdit} />
                <NewIssueBtn onClick />
              </div>
            )}
            {openInput && (
              <div className="mt-[12px]">
                <SaveBtn onClick={toggleEdit} />
                <button
                  className="text-[#0969da] ml-[10px]"
                  onClick={toggleEdit}
                >
                  Cancel
                </button>
              </div>
            )}
            {!openInput && (
              <div className="flex-auto text-right h-[21px] leading-[21px] ">
                <a
                  href="#/"
                  className="text-[#0969da] text-[14px] pt-[4px] pb-[4px] "
                >
                  jump to bottom{" "}
                </a>
              </div>
            )}
          </div>
          {!openInput && (
            <div className="text-[26px] mb-[8px] h-[32.5px] leading-[32.5px]">
              <span className="mr-[10px]">
                {perIssueData ? perIssueData.title : ""}
              </span>
              <span className="text-[#57606a] font-thin">
                #{perIssueData ? perIssueData.number : ""}
              </span>
            </div>
          )}
        </div>

        <div className="sm:flex mb-[16px] pb-[8px] h-[49px] items-center  border border-solid  border-b-[hsla(210,18%,87%,1)] border-l-0 border-r-0  border-t-0 ">
          <div className=" w-[85px] h-[32px] mb-[8px] bg-[#2da44e] text-[14px] rounded-[20px] px-[12px] py-[5px] mr-[8px] leading-[22px] text-center ">
            <IssueOpenedIcon size={16} fill="#fff" />
            <span className="font-semibold text-[#fff]"> Open</span>
          </div>
          <div className="flex mb-[8px] text-[14px] h-[25px] leading-[25px]">
            <a href="#/" className="text-[#57606a] font-semibold mr-[5px]">
              {perIssueData ? perIssueData.user.login : ""}
            </a>
            opened this issue 16 days ago ·
            {perIssueData ? perIssueData.comments : ""} comments
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderEdit;
