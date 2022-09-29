// import styled from "styled-components";
import { useState, useEffect } from "react";

import { IssueOpenedIcon } from "@primer/octicons-react";
import { CommentIcon } from "@primer/octicons-react";

const ListItem = ({ data, isOpenIssue }) => {
  // function lightOrDark(bgcolor) {
  //   const r = parseInt(bgcolor.slice(0, 2), 16);
  //   const g = parseInt(bgcolor.slice(2, 4), 16);
  //   const b = parseInt(bgcolor.slice(4, 6), 16);
  //   const hsp = r * 0.3 + g * 0.6 + b * 0.1;
  //   if (hsp > 127.5) {
  //     return "black";
  //   } else {
  //     return "white";
  //   }
  // }
  // useEffect(lightOrDark, []);
  return (
    <div className="border border-t-0  px-[16px] py-[8px] flex border-border border-solid border-[#d0d7de] ">
      <IssueOpenedIcon className="fill-primary" fill="#127f37" />
      <div className="px-2">
        <span className="text-[14px] font-semibold leading-[21.6px] mr-[5px] ">
          {data.title}
        </span>
        {data.labels.map((item) => {
          return (
            <span className="block lg:inline">
              <div
                style={{ backgroundColor: `#${item.color}` }}
                className="font-semibold inline-block h-[20px]  leading-[20px] px-[7px] rounded-[10px] mr-[5px]  "
              >
                {item.name}
              </div>
            </span>
          );
        })}
        <div className="text-text text-sm mt-2">
          # {data.number} opened 22 hours ago by {data.user.login}
        </div>
      </div>
      <div className="min-w-[20%] hidden sm:flex ml-auto ">
        <div className="flex-1"></div>

        <span className=" ml-auto flex flex-1 min-w-[30%]  flex-row-reverse">
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
        {data.comments > 0 && (
          <span className="ml-[15px] flex-nowrap flex-1 flex justify-center ">
            <CommentIcon size={16} />
            <span className="ml-[3px]">{data.comments}</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default ListItem;
