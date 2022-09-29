import { XIcon, CheckIcon } from "@primer/octicons-react";
import { useEffect, useState } from "react";
import api from "../../../services/api";
// import styled from "styled-components";

const labelslist = [
  {
    name: "123lll26",
    des: "123",
    color: "bg-[#acacac]",
    usercustomname: "elaine",
  },
  {
    name: "123456",
    des: "123",
    color: "bg-[#7F1D1D]",
  },
  {
    name: "bug",
    des: "fixed it",
    color: "bg-[#f29513]",
  },
  {
    name: "fight",
    des: "",
    color: "bg-[#7F1D1D]",
    usercustomname: "elaine",
  },
  {
    name: "new label1321",
    des: "123",
    color: "bg-[#7F1D1D]",
  },
  {
    name: "new",
    des: "new label",
    color: "bg-[#7F1D1D]",
  },
];

export default function AssigneeDropList({ isOpenIssue }) {
  const [isAssignee, setIsAssignee] = useState([]);
  const fetchIsOpenIssue = () => {
    api.getAssigneeMenber().then((res) => {
      setIsAssignee(res);
    });
  };
  useEffect(fetchIsOpenIssue, []);
  return (
    <div className="sm:relative">
      <div className="text-[14px] sm:text-[12px]">
        <div className=" fixed top-0 left-0 right-0 bottom-0 flex p-4 flex-col z-[100] sm:z-[1] sm:absolute sm:top-auto sm:right-auto sm:left-auto sm:bottom-auto sm:p-0 lg:right-0">
          <div className="h-4/5 mt-0 bg-[#ffffff] border border-solid border-[rgba(0,0,0,0)] rounded-xl sm:border-[hsla(210,18%,87%,1)] sm:h-auto sm:max-h-[480px] sm:mt-2 sm:w-[300px]">
            <header className="flex p-4 items-center border-b border-solid border-b-[hsla(210,18%,87%,1)] sm:pt-[7px] sm:pr-[7px] sm:pb-[7px]">
              <span className="font-semibold flex-1">
                Filter by Who's Assignee
              </span>
              <button className="cursor-pointer p-4 m-[-16px] leading-none rounded-none">
                <XIcon fill={"#57606a"} />
              </button>
            </header>
            <div className="p-4 m-0 border-b border-solid border-b-[hsla(210,18%,87%,1)] sm:p-2">
              <input
                placeholder="Filter users"
                className="block w-full py-[5px] px-[12px] text-sm leading-5 rounded-md border border-solid border-[#d0d7de] focus:border focus:border-solid focus:border-[#0969da] focus:outline-none focus:shadow-innerblue"
              />
            </div>
            <div className="overflow-y-auto max-h-[calc(100%-126px)] sm:max-h-[calc(485px-82px)]">
              <a
                href="#/"
                className="flex items-start w-full p-4 overflow-hidden text-[#24292f] text-left cursor-pointer border-b border-solid border-b-[hsla(210,18%,87%,1)] sm:pt-[7px] sm:pb-[7px]"
              >
                <div className="flex items-start mr-2">
                  <CheckIcon fill={"#ffffff"} />
                </div>
                <span className="font-semibold">Assigned to nobody</span>
              </a>
              {isAssignee.map((element, index) => {
                return (
                  <a
                    href="#/"
                    className={`flex items-start w-full p-4 overflow-hidden text-[#24292f] text-left cursor-pointer border-b ${
                      labelslist.length - 1 !== index
                        ? "border-solid"
                        : "border-none"
                    } hover:bg-[rgba(234,238,242,0.5)] border-b-[hsla(210,18%,87%,1)] sm:pt-[7px] sm:pb-[7px]`}
                  >
                    <div className="flex items-start mr-2">
                      <CheckIcon fill={"#000000"} />
                    </div>
                    <div>
                      <span>
                        <img
                          alt=""
                          src={element.avatar_url}
                          className=" mt-px rounded-[2em] w-[1em] h-[1em] mr-2 text-[14px]"
                        />
                      </span>
                    </div>
                    <div className="leading-tight min-w-0">
                      <div className="flex items-center">
                        <div className="font-semibold text-[#24292f] truncate sm:pt-[2px]">
                          {element.login}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
