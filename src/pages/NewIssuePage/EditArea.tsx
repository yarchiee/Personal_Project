// import { useEffect, useState } from "react";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import styled from "styled-components";
import SubmitBtn from "./SubmitBtn";
import TextArea from "./TextArea";
import MarkDownArea from "./MarkDownArea";

import {
  TypographyIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  QuoteIcon,
  CodeIcon,
  LinkIcon,
  MentionIcon,
  ImageIcon,
  CrossReferenceIcon,
  ReplyIcon,
  HeadingIcon,
  BoldIcon,
  ItalicIcon,
  ListUnorderedIcon,
  ListOrderedIcon,
  TasklistIcon,
  InfoIcon,
  MarkdownIcon,
} from "@primer/octicons-react";
import { useState } from "react";
const toolIconList = [
  [<QuoteIcon />, <CodeIcon />, <LinkIcon />],
  [<MentionIcon />, <ImageIcon />, <CrossReferenceIcon />, <ReplyIcon />],
  [<HeadingIcon />, <BoldIcon />, <ItalicIcon />],
  [<BoldIcon />, <ListOrderedIcon />, <TasklistIcon />],
  [
    <HeadingIcon />,
    <BoldIcon />,
    <ItalicIcon />,
    <ListUnorderedIcon />,
    <ListOrderedIcon />,
    <TasklistIcon />,
  ],
  [
    <HeadingIcon />,
    <BoldIcon />,
    <ItalicIcon />,
    <QuoteIcon />,
    <CodeIcon />,
    <LinkIcon />,

    <ListUnorderedIcon />,
    <ListOrderedIcon />,
    <TasklistIcon />,
    <MentionIcon />,

    <CrossReferenceIcon />,
    <ReplyIcon />,
  ],
];
const EditArea = () => {
  const [openEditTool, setOpenEditModal] = useState(false);
  const [openMarkDown, setOpenMarkDown] = useState(false);
  const [openWrite, setOpenWrite] = useState(true);

  const toggleEditTool = () => {
    setOpenEditModal(!openEditTool);
  };
  const toggleMarkDown = () => {
    setOpenMarkDown(true);
    setOpenWrite(false);
  };
  const toggleWrite = () => {
    setOpenWrite(true);
    setOpenMarkDown(false);
  };
  return (
    <div className="md:w-full  md:mr-[16px]">
      <div className="md:border md:border-solid md:border-[#d0d7de] md:rounded-[6px]">
        <div className="md:p-[8px]">
          <input
            type="text"
            placeholder="Title"
            className="mb-[16px] placeholder:text-[#6E7781] border  border-[#d0d7de] w-full h-[32px] bg-[#f6f8fa]  rounded-[6px] text-[16px] p-[8px] pl-[12px] pt-[12px] focus:border-[2px] focus:border-solid focus:border-[#0969da] focus:outline-none focus:shadow-innerblue md:mb-0"
          />
        </div>
        <div>
          <div className="w-full h-[49px] mb-[8px] text-[#24292f] text-[14px]  md:border-b-[#d0d7de] md:pl-[8px] md:pr-[8px] md:pt-[8px] md:border-l-0 md:border-r-0 md:border-t-0 md:mb-[-1px] lg:flex ">
            <button
              className="border border-solid border-[#d0d7de] border-b-[#ffffff] w-[50%] h-full tracking-wide md:w-[70px] md:rounded-t-[6px]"
              onClick={toggleWrite}
            >
              Write
            </button>
            <button
              className="w-[50%] h-full tracking-wide border border-solid border-[#d0d7de] bg-[#f6f8fa] border-l-0 md:w-[82px] md:bg-transparent md:border-0"
              onClick={toggleMarkDown}
            >
              Preview
            </button>
            {openWrite && (
              <div className="hidden  md:hidden lg:flex lg:items-center lg:ml-auto">
                {toolIconList[5].map((item) => (
                  <div className="md:w-[24px] md:h-[24px] md:p-[4px] md:mx-[4px] md:text-[#57606a] ">
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
          {openWrite && (
            <div className="flex p-[8px] pb-0 h-[40px] text-[#57606a] md:h-[33px] md:border md:border-solid md:border-t-[#d0d7de] md:border-r-0 md:border-l-0 md:border-b-0 lg:hidden">
              <div
                className="block mr-auto w-[60px] h-[32px] p-[8px] mx-[4px] text-[#57606a] md:hidden "
                onClick={toggleEditTool}
              >
                <TypographyIcon className="mr-[5px] " />
                {!openEditTool && <ChevronDownIcon className="" />}
                {openEditTool && <ChevronUpIcon className="" />}
              </div>
              <div className=" flex md:hidden">
                {toolIconList[0].map((item) => (
                  <div className="w-[32px] h-[32px] p-[8px] mx-[4px] text-[#57606a] ">
                    {item}
                  </div>
                ))}
              </div>
              <div className=" flex md:hidden">
                {toolIconList[1].map((item) => (
                  <div className="w-[32px] h-[32px] p-[8px] mx-[4px] text-[#57606a] ">
                    {item}
                  </div>
                ))}
              </div>

              <div className="hidden  md:flex  lg:hidden ">
                {toolIconList[5].map((item) => (
                  <div className="md:w-[24px] md:h-[24px] md:p-[4px] md:mx-[4px] md:text-[#57606a] ">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
          {openEditTool && (
            <div className="flex pl-[8px]">
              {toolIconList[4].map((item) => (
                <div className="w-[32px] h-[32px] p-[8px] mx-[4px] text-[#57606a] ">
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
        {openWrite && <TextArea />}
        {openMarkDown && <MarkDownArea />}
        <div className="text-[#57606a] mt-[16px] mb-[8px] leading-[20px] block  md:hidden">
          <InfoIcon size={16} className="mr-[4px] align-text-bottom" />
          Remember, contributions to this repository should follow our
          <a href="/" className="text-[#0969da]">
            {" "}
            GitHub Community Guidelines
          </a>
          .
        </div>
        <div className="text-[#57606a] hidden mr-[8px] ml-[8px] mb-[8px] leading-[32px] md:flex md:justify-between ">
          <div>
            <MarkdownIcon size={16} className="mr-[6px] align-text-bottom" />
            Style with Markdown is supported
          </div>
          <SubmitBtn />
        </div>
      </div>
      <div className="text-[#57606a] mt-[8px] mb-[8px] leading-[20px] hidden md:block">
        <InfoIcon size={16} className="mr-[4px] align-text-bottom" />
        Remember, contributions to this repository should follow our
        <a href="/" className="text-[#0969da]">
          {" "}
          GitHub Community Guidelines
        </a>
        .
      </div>
    </div>
  );
};

export default EditArea;
