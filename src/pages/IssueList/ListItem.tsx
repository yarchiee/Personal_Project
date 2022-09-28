// import styled from "styled-components";
// import { useState } from "react";

import { IssueOpenedIcon } from "@primer/octicons-react";
import { CommentIcon } from "@primer/octicons-react";

const ListItem = () => {
  return (
    <div className="border border-t-0  px-[16px] py-[8px] flex border-border border-solid border-[#d0d7de] ">
      <IssueOpenedIcon className="fill-primary" fill="#127f37" />
      <div className="px-2">
        <span className="text-[14px] font-semibold leading-[21.6px] mr-[5px] ">
          Sometimes Axios removes the last part of the url and sends a get
          request istead of a post request.
        </span>
        <span className="block lg:inline">
          <div className="font-semibold inline-block h-[20px] bg-[#dcb5ac] leading-[20px] px-[7px] rounded-[10px] mr-[5px]  ">
            bug
          </div>
        </span>
        <div className="text-text text-sm mt-2">
          #5 opened 22 hours ago by chloe7303
        </div>
      </div>
      <div className="min-w-[20%] hidden sm:flex ml-auto ">
        <div className="flex-1"></div>

        <span className=" ml-auto flex flex-1 min-w-[30%]  flex-row-reverse">
          <img
            className="w-[20px] h-[20px] rounded-[50%] border"
            src="https://avatars.githubusercontent.com/u/34449805?s=40&v=4"
            alt=""
          />
          <img
            className="w-[20px] h-[20px] rounded-[50%] border"
            src="https://avatars.githubusercontent.com/u/34449805?s=40&v=4"
            alt=""
          />
          <img
            className="w-[20px] h-[20px] rounded-[50%] border"
            src="https://avatars.githubusercontent.com/u/34449805?s=40&v=4"
            alt=""
          />
          <img
            className="w-[20px] h-[20px] rounded-[50%]  border"
            src="https://avatars.githubusercontent.com/u/34449805?s=40&v=4"
            alt=""
          />
        </span>

        <span className="ml-[15px] flex-nowrap flex-1 flex justify-center ">
          <CommentIcon size={16} />
          <span className="ml-[3px]">1</span>
        </span>
      </div>
    </div>
  );
};

export default ListItem;
