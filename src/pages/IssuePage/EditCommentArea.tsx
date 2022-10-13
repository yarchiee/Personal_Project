import { useNavigate } from "react-router-dom";
// import SubmitBtn from "../NewIssuePage/SubmitBtn";
import TextArea from "../NewIssuePage/TextArea";
import MarkDownArea from "../NewIssuePage/MarkDownArea";
import UpdateBtn from "../../components/UpdateBtn";
import CancelBtn from "../../components/CancelBtn";
import { useEffect, useRef, useState } from "react";
import TextareaMarkdown, {
  TextareaMarkdownRef,
} from "textarea-markdown-editor";
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
import api from "../../services/api";

const toolIconList = [
  [
    <QuoteIcon className="block-quotes" />,
    <CodeIcon className="code" />,
    <LinkIcon className="link" />,
  ],
  [
    <MentionIcon />,
    <ImageIcon className="image" />,
    <CrossReferenceIcon />,
    <ReplyIcon />,
  ],
  [
    <HeadingIcon className="h3" />,
    <BoldIcon className="bold" />,
    <ItalicIcon className="italic" />,
  ],
  [
    <BoldIcon className="bold" />,
    <ListOrderedIcon className="ordered-list" />,
    <TasklistIcon className="tasklist" />,
  ],
  [
    <HeadingIcon className="h3" />,
    <BoldIcon className="bold" />,
    <ItalicIcon className="italic" />,
    <ListUnorderedIcon className="unordered-list" />,
    <ListOrderedIcon className="ordered-list" />,
    <TasklistIcon className="tasklist" />,
  ],
  [
    <HeadingIcon className="h3" />,
    <BoldIcon className="bold" />,
    <ItalicIcon className="italic" />,
    <QuoteIcon className="block-quotes" />,
    <CodeIcon className="code" />,
    <LinkIcon className="link" />,

    <ListUnorderedIcon className="unordered-list" />,
    <ListOrderedIcon className="ordered-list" />,
    <TasklistIcon className="tasklist" />,
    <MentionIcon />,

    <CrossReferenceIcon />,
    <ReplyIcon />,
  ],
];
const EditCommentArea = ({
  leaveComment,
  setLeaveComment,
  toggleEditModal,
  editModal,
  setEditModal,
  data,
}) => {
  const [openEditTool, setOpenEditModal] = useState(false);
  const [openMarkDown, setOpenMarkDown] = useState(false);
  const [openWrite, setOpenWrite] = useState(true);
  const [editData, setEditData] = useState({
    comment_id: data.id,
    body: leaveComment,
  });
  const isNewComment = (obj) => {
    const newComment = { ...editData, ...obj };
    setEditData(newComment);
  };
  const updateComment = () => {
    api.updateComment().then((res) => {
      // setPerIssueData(res);
    });
  };
  useEffect(updateComment, []);
  //   const navigate = useNavigate();
  //   const REPOSITORY = "github-project";
  const markdownref = useRef<TextareaMarkdownRef>(null);
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
    <div className={`md:w-full    mb-[30px]`}>
      <div
        className={`md:border md:border-solid md:border-[#d0d7de] md:rounded-[6px]
        ${
          data?.author_association === "OWNER"
            ? " md:border-[#54AEFF66]"
            : " md:border-[#d0d7de]"
        }`}
      >
        <div>
          <div
            className={` ${
              data?.author_association === "OWNER"
                ? "bg-[#ddf4ff] border-b-[#54AEFF66]"
                : "bg-[#f6f8fa] border-b-[#d0d7de]"
            } w-full h-[49px] mb-[8px] text-[#24292f] text-[14px]  md:border-b-[#d0d7de] md:pl-[8px] md:pr-[8px] md:pt-[8px] md:border-l-0 md:border-r-0 md:border-t-0 md:mb-[-1px] lg:flex  `}
          >
            <button
              className="border border-solid border-[#d0d7de] border-b-[#ffffff] bg-[#fff] w-[50%] h-full tracking-wide md:w-[70px] md:rounded-t-[6px]"
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
                {toolIconList[5].map((item, index) => (
                  <div
                    onClick={() =>
                      markdownref.current?.trigger(item.props.className)
                    }
                    key={index}
                    className="md:w-[24px] md:h-[24px] md:p-[4px] md:mx-[4px] md:text-[#57606a] hover:text-[#218bff] cursor-pointer"
                  >
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
                {toolIconList[0].map((item, index) => (
                  <div
                    onClick={() =>
                      markdownref.current?.trigger(item.props.className)
                    }
                    key={index}
                    className="w-[32px] h-[32px] p-[8px] mx-[4px] text-[#57606a] "
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className=" flex md:hidden">
                {toolIconList[1].map((item, index) => (
                  <div
                    onClick={() =>
                      markdownref.current?.trigger(item.props.className)
                    }
                    key={index}
                    className="w-[32px] h-[32px] p-[8px] mx-[4px] text-[#57606a] "
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="hidden  md:flex  lg:hidden ">
                {toolIconList[5].map((item, index) => (
                  <div
                    onClick={() =>
                      markdownref.current?.trigger(item.props.className)
                    }
                    key={index}
                    className="md:w-[24px] md:h-[24px] md:p-[4px] md:mx-[4px] md:text-[#57606a] "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
          {openEditTool && (
            <div className="flex pl-[8px]">
              {toolIconList[4].map((item, index) => (
                <div
                  onClick={() =>
                    markdownref.current?.trigger(item.props.className)
                  }
                  key={index}
                  className="w-[32px] h-[32px] p-[8px] mx-[4px] text-[#57606a] "
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
        {openWrite && (
          <TextArea
            ref={markdownref}
            leaveComment={leaveComment}
            setLeaveComment={setLeaveComment}
            createData={""}
            setcreateData={""}
          />
        )}
        {openMarkDown && (
          <MarkDownArea
            leaveComment={leaveComment}
            setLeaveComment={setLeaveComment}
          />
        )}

        <div className="text-[#57606a]  md:mr-[8px] mr-0 md:ml-[8px] ml-0  mb-[8px] md:leading-[32px] flex justify-end md:h-[32px] mt-0 ">
          <CancelBtn
            onClick={() => {
              toggleEditModal();
            }}
            disabled={false}
          />
          <UpdateBtn
            onClick={() => {
              // isNewComment();
            }}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default EditCommentArea;
