// import { useEffect, useState } from "react";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import styled from "styled-components";
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
  GearIcon,
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
    <CodeIcon />,
    <LinkIcon />,
    <BoldIcon />,
    <ListOrderedIcon />,
    <TasklistIcon />,
    <MentionIcon />,
    <ImageIcon />,
    <CrossReferenceIcon />,
    <ReplyIcon />,
  ],
];
function NewIssuePage() {
  const [openEditTool, setOpenEditModal] = useState(false);
  const toggleEditTool = () => {
    setOpenEditModal(!openEditTool);
  };
  return (
    <>
      <div className="mt-[24px] px-[16px] md:flex  md:px-[32px] ">
        <img
          src="https://avatars.githubusercontent.com/u/105163825?s=80&v=4"
          alt=""
          className=" hidden md:rounded-[50%] md:w-[40px] md:h-[40px] md:block md:mr-[15px] md:border md:border-solid md:border-[#d0d7de]"
        />
        <div className="md:w-full  md:mr-[16px] md:border md:border-solid md:border-[#d0d7de] md:rounded-[6px]">
          <div className="md:p-[8px]">
            <input
              type="text"
              placeholder="Title"
              className="mb-[16px] placeholder:text-[#6E7781] border  border-[#d0d7de] w-full h-[32px] bg-[#f6f8fa]  rounded-[6px] text-[16px] p-[8px] pl-[12px] pt-[12px] focus:border-[2px] focus:border-solid focus:border-[#0969da] focus:outline-none focus:shadow-innerblue md:mb-0"
            />
          </div>
          <div>
            <div className="w-full h-[41px] mb-[8px] text-[#24292f] text-[14px] md:mx-[8px] md:mt-[8px] md:mb-0">
              <button className="border border-solid border-[#d0d7de] border-b-0 w-[50%] h-full tracking-wide md:w-[70px]">
                Write
              </button>
              <button className="w-[50%] h-full tracking-wide border border-solid border-[#d0d7de] bg-[#f6f8fa] border-l-0 md:w-[82px] ">
                Preview
              </button>
            </div>
            <div
              className="flex p-[8px] pb-0 h-[40px] text-[#57606a"
              onClick={toggleEditTool}
            >
              <div className="block mr-auto w-[60px] h-[32px] p-[8px] mx-[4px] text-[#57606a] md:hidden ">
                <TypographyIcon className="mr-[5px] " />
                {!openEditTool && <ChevronDownIcon className="" />}
                {openEditTool && <ChevronUpIcon className="" />}
              </div>
              <div className="flex">
                {toolIconList[0].map((item) => (
                  <div className="w-[32px] h-[32px] p-[8px] mx-[4px] text-[#57606a] ">
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex">
                {toolIconList[1].map((item) => (
                  <div className="w-[32px] h-[32px] p-[8px] mx-[4px] text-[#57606a] ">
                    {item}
                  </div>
                ))}
              </div>
            </div>
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
          <div className="n md:p-[8px] k">
            <div className="hidde md:border md:border-solid md:border-[#d0d7de] md:rounded-[6px] md:bloc">
              <textarea
                className="border border-solid border-[#d0d7de] w-full min-h-[200px] my-[8px]  bg-[#f6f8fa] rounded-[6px]  placeholder:text-[#6E7781] placeholder:text-[14px] placeholder:tracking-wide  text-[14px] resize-y p-[10px]  focus:border-[2px] focus:border-solid focus:border-[#0969da] focus:outline-none focus:shadow-innerblue md:border-0 md:my-0"
                placeholder="Leave a comment"
              />
              <label className="hidden  md:h-[30px]  md:block md:border md:border-dashed md:border-[#D0D7DE] md:bg-[#f6f8fa] md:border-r-0 md:border-l-0 md:border-b-0 md:rounded-[6px] md:p-[5px] cursor-pointer md:leading-[20px] ">
                <input
                  type="text"
                  className="  opacity-10 md:absolute "
                  onClick={() => {
                    console.log("input");
                  }}
                />
                <span className="md:rounded-[6px] md:relative text-[#6E7781]">
                  Attach files by dragging & droppind, selecting or pasting
                  them.
                </span>
                <a
                  href="/"
                  className="md:ml-auto md:relative md:right:0 md:align-bottom md:text-[#6E7781]"
                >
                  <MarkdownIcon size={16} />
                </a>
              </label>
            </div>
          </div>
          <div className="text-[#57606a] mt-[16px] mb-[8px] leading-[20px]">
            <InfoIcon size={16} className="mr-[4px] align-text-bottom" />
            Remember, contributions to this repository should follow our
            <a href="/" className="text-[#0969da]">
              {" "}
              GitHub Community Guidelines
            </a>
            .
          </div>
        </div>

        <div className="md:w-[390px] lg:w-[340px]">
          <div className="pt-[16px]">
            <details className="group">
              <summary className="flex text-[#57606a] hover:text-[#0969da] list-none font-semibold justify-between py-[4px] mb-[4px] group-hover:text-[#0969da] ">
                Assignees
                <GearIcon
                  size={16}
                  className="text-[#57606a] group-hover:text-[#0969da] cursor-pointer"
                />
              </summary>
            </details>
            No one -{" "}
            <button className="hover:text-[#0969da]">assign yourself</button>
          </div>
          <div className="pt-[16px] mt-[16px] border border-solid border-t-[hsla(210,18%,87%,1)] border-l-0 border-r-0 border-b-0">
            <details className="group">
              <summary className="flex text-[#57606a]  list-none font-semibold justify-between py-[4px] mb-[4px] group-hover:text-[#0969da]">
                Labels
                <GearIcon
                  size={16}
                  className="text-[#57606a] group-hover:text-[#0969da] cursor-pointer"
                />
              </summary>
            </details>
            None yet
          </div>
          <div className="pt-[16px] mt-[16px] border border-solid border-t-[hsla(210,18%,87%,1)] border-l-0 border-r-0 border-b-0">
            <details className="group">
              <summary className="flex text-[#57606a]  list-none font-semibold justify-between py-[4px] mb-[4px] group-hover:text-[#0969da]">
                Helpful resources
              </summary>
            </details>
            Github Community Guidelines
          </div>
          <div className="mt-[16px] border border-solid border-t-[hsla(210,18%,87%,1)] border-l-0 border-r-0 border-b-0 "></div>
        </div>
        <button
          type="submit"
          className="text-[#ffffff] bg-[#94d3a2] w-full text-center font-semibold h-[32px] mt-[24px] text-[14px] rounded-[6px] border border-solid border-[#d0d7de] md:hidden"
        >
          Submit new issue
        </button>
      </div>
    </>
  );
}

export default NewIssuePage;
