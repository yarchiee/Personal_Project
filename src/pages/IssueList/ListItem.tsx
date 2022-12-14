import lightOrDark from "../../utils/lightCal";
import {
  IssueOpenedIcon,
  IssueClosedIcon,
  SkipIcon,
} from "@primer/octicons-react";
import { CommentIcon } from "@primer/octicons-react";
import { useNavigate } from "react-router-dom";
import calculateTime from "../../utils/Time";

const ListItem = ({ data, isOpenIssue }) => {
  const time = calculateTime(data.created_at);
  const navigate = useNavigate();
  return (
    <div className="border border-t-0  px-[16px] py-[8px] flex border-border border-solid border-[#d0d7de] hover:bg-[rgba(234,238,242,0.5)] ">
      {data.state_reason === "completed" ? (
        <IssueClosedIcon className="fill-primary" fill="#8250df" />
      ) : data.state_reason === "not_planned" ? (
        <SkipIcon className="fill-primary" fill="#57606a" />
      ) : (
        <IssueOpenedIcon className="fill-primary" fill="#127f37" />
      )}

      <div className="px-2">
        <span
          className="cursor-pointer text-[14px] font-semibold leading-[21.6px] mr-[5px] hover:text-[#0969da]"
          onClick={(e) => {
            navigate(`${data.number}`);
            e.stopPropagation();
          }}
        >
          {data.title}
        </span>
        {data.labels.map((item) => {
          return (
            <span className="lg:inline cursor-pointer">
              <div
                style={{
                  backgroundColor: `#${item.color}`,
                  color: `${lightOrDark(item.color)}`,
                }}
                className="font-semibold inline-block h-[20px]  leading-[20px] px-[7px] rounded-[10px] mr-[5px] text-[5px]   "
              >
                {item.name}
              </div>
            </span>
          );
        })}
        <div className="text-[10px] text-sm mt-2 cursor-pointer">
          # {data.number} opened {time} ago by {data.user.login}
        </div>
      </div>
      <div className="min-w-[20%] hidden sm:flex ml-auto ">
        <div className="flex-1"></div>

        <span className=" ml-auto flex flex-1 min-w-[30%]  flex-row-reverse cursor-pointer">
          {data.assignees.map((item) => {
            return (
              <img
                className="w-[20px] h-[20px] rounded-[50%] border"
                src={item.avatar_url}
                alt=""
              />
            );
          })}
        </span>
        {data.comments > 0 ? (
          <span className=" ml-[15px] flex-nowrap flex-1 flex justify-center hover:text-[#0969da] cursor-pointer ">
            <CommentIcon size={16} />
            <span className="ml-[3px] text-[3px]">{data.comments}</span>
          </span>
        ) : (
          <span className="opacity-0 ml-[15px] flex-nowrap flex-1 flex justify-center hover:text-[#0969da] cursor-pointer ">
            <CommentIcon size={16} />
            <span className="ml-[3px] text-[3px]">{data.comments}</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default ListItem;
