import { KebabHorizontalIcon, SmileyIcon } from "@primer/octicons-react";
import { useState } from "react";
import AuthorTag from "../../../components/AuthorTag";
import PopOver from "./PopOver";
import EditCommentArea from "./EditCommentArea";
import api from "../../../services/api";

const CommentItem = ({
  data,
  type,
  issueNumber,
  setTimeLineEvent,
  setPerIssueData,
  updateIssue,
  setUpdateIssue,
}) => {
  const [editModal, setEditModal] = useState(false);
  const toggleEditModal = () => {
    setEditModal(!editModal);
  };
  const closeDetails = () => {
    const targetId = data?.id;
    if (targetId) {
      const target = document.getElementById(targetId);
      target.removeAttribute("open");
    }
  };
  const handleDelete = () => {
    const yes = window.confirm("Are you sure you want to delete this？");
    if (yes) {
      const timelineObj = {
        issueNumber: issueNumber,
      };
      const id = data?.id;
      api
        .deleteComment(id)
        .then(() => {
          api.getTimeLineEvent(timelineObj).then((res) => {
            setTimeLineEvent(res);
          });
        })
        .finally(() => {
          closeDetails();
        });
    } else {
      closeDetails();
    }
  };
  console.log(data);

  return (
    <>
      <div className="md:flex md:flex-auto">
        <img
          src={`${data ? data.user.avatar_url : ""}`}
          alt=""
          className=" hidden md:rounded-[50%] md:w-[40px] md:h-[40px] md:block md:mr-[15px] md:border md:border-solid md:border-[#d0d7de]"
        />

        {!editModal && (
          <div className="rounded-[6px] relative pb-[32px] before:bg-[#d8dee4] before:w-[2px] before:absolute before:top-0 before:right-0 before:left-[16px] before:z-[-100] before:bottom-0 md:w-full">
            <div
              className={`${
                data?.author_association === "OWNER"
                  ? " border-[#54AEFF66]"
                  : " border-[#d0d7de]"
              } border border-solid  rounded-[6px]`}
            >
              <div
                className={`rounded-t-[6px] h-[37px] items-center ${
                  data?.author_association === "OWNER"
                    ? "bg-[#ddf4ff] border-b-[#54AEFF66]"
                    : "bg-[#f6f8fa] border-b-[#d0d7de]"
                } flex px-[16px] border border-solid border-r-0 border-l-0  border-t-0`}
              >
                <div className="rounded-[6px] flex-auto h-[21px] leading-[21px] text-[14px]">
                  <a
                    href="#/"
                    className="rounded-[6px] max-w-[125px] mr-[10px] font-semibold"
                  >
                    {data ? data.user.login : ""}
                  </a>
                  commented 16 days ago
                </div>
                <div className="flex">
                  <AuthorTag data={data} />
                  <div className="ml-[8px] flex ">
                    <details>
                      <summary className="list-none hidden md:block h-[20px]">
                        <SmileyIcon size={16} fill="#57606a" />
                      </summary>
                    </details>
                    <details id={data?.id}>
                      <summary className="list-none">
                        <KebabHorizontalIcon
                          size={16}
                          fill="#57606a"
                          className="ml-[8px] h-[20px]"
                        />
                      </summary>
                      <PopOver
                        toggleEditModal={toggleEditModal}
                        handleDelete={handleDelete}
                        type={type}
                      />
                    </details>
                  </div>
                </div>
              </div>
              <div className="rounded-[6px] p-[16px] text-[14px] leading-[18px] bg-[#fff] ">
                {data ? data.body : ""}
              </div>
            </div>
          </div>
        )}
        {editModal && (
          <EditCommentArea
            leaveComment={true}
            setLeaveComment={false}
            toggleEditModal={toggleEditModal}
            editModal={editModal}
            setEditModal={setEditModal}
            data={data}
            setTimeLineEvent={setTimeLineEvent}
            setPerIssueData={setPerIssueData}
            updateIssue={updateIssue}
            setUpdateIssue={setUpdateIssue}
          />
        )}
      </div>
    </>
  );
};
export default CommentItem;
