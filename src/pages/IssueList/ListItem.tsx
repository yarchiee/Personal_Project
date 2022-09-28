// import styled from "styled-components";
// import { useState } from "react";

import { IssueOpenedIcon } from "@primer/octicons-react";
import { CommentIcon } from "@primer/octicons-react";

// import LabelTag from "../Labels/LabelTag";

// const EachLabelContainer = styled.div`
//   border: 1px solid #d0d7de;
//   border-top: none;
//   padding: 16px;
//   display: flex;
//   line-height: 44px;
// `;
// const IssueLabel = styled.div`
//   height: 28px;
//   margin: auto 0;
//   display: inline-block;
// `;
const ListItem = () => {
  return (
    <>
      {/* <div className="flex border hover:bg-[#f6f8fa] sm: p-[8px] border border-[#d0d7de] border-w-full border-solid min-h-[62.5px]">
        <IssueOpenedIcon
          size={16}
          fill="#127f37"
          className=" mt-[8px] ml-[16px]"
        />

        <div className="p-[8px] ">
          <div className="sm:flex">
            <div className="text-[14px] font-semibold leading-[21.6px]">
              555555555555555
            </div>
            <div className="font-semibold inline-block h-[20px] bg-[#dcb5ac] leading-[20px] px-[7px] rounded-[10px]  mr-[5px] my-[2px]  sm:my-[0px] mx-[3px] ml-[3px]  ">
              bug
            </div>
          </div>
          <div className="leading-[18px] mt-[4px] ">
            6 opened 18 hours ago by chloe7303
          </div>
        </div>
        <div className="w-1/4 sm: flex pt-[8px] pr-[16px]">
          <CommentIcon size={16} className="ml-auto mr-0 " />
          <span className="ml-[3px]">1</span>
        </div>
      </div> */}{" "}
      {/* <input
            type="checkbox"
            className="mb-auto mx-[12px] hidden sm:block"
          /> */}
      <div>
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
      </div>
    </>
  );
};

export default ListItem;

// https://avatars.githubusercontent.com/u/34449805?s=40&v=4

// https://avatars.githubusercontent.com/u/105163825?s=40&v=4
