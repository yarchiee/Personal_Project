import { XIcon, CheckIcon, PencilIcon } from "@primer/octicons-react";
import Input from "./Input";
import { uniq, remove } from "lodash";
export default function PopOverList({
  list,
  type,
  callback,
  whoIsAssignee,
  setWhoIsAssignee,
  selectdLabel,
  setSelectedLabel,
  newCreateIssue,
  check,
  setCheck,
}) {
  console.log(newCreateIssue);
  const matchChildAssign = (child) => {
    return (
      <>
        <div
          onClick={() => {
            let tmp = [...whoIsAssignee];
            if (check.includes(child.login)) {
              setCheck(
                remove(check, (loginText) => {
                  return loginText !== child.login;
                })
              );
              setWhoIsAssignee(
                remove(whoIsAssignee, (assigneeText) => {
                  return assigneeText !== child.login;
                })
              );
              return;
            }
            setCheck(uniq([...check, child.login]));
            setWhoIsAssignee([...tmp, child.login]);
          }}
          className="flex"
        >
          <img
            className="w-[20px] h-[20px] mr-[5px]"
            src={child.avatar_url}
            alt=""
          />
          <div className="leading-tight min-w-0">
            <div className="flex items-center">
              <div className="font-semibold text-[#24292f] truncate sm:pt-[2px]">
                {child.login}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const matchChild = (item) => {
    const matchChildLabel = (child) => {
      return (
        <>
          <div
            onClick={() => {
              let tmp = [...selectdLabel];
              if (check.includes(child.name)) {
                setCheck(
                  remove(check, (labelText) => {
                    return labelText !== child.name;
                  })
                );
                setSelectedLabel(
                  remove(selectdLabel, (labelText) => {
                    return labelText !== child.name;
                  })
                );
                return;
              }
              setCheck(uniq([...check, child.name]));
              setSelectedLabel([...tmp, child.name]);
            }}
            className="flex"
          >
            <span
              style={{ backgroundColor: `#${child.color}` }}
              className={`mt-px rounded-[2em] w-[1em] h-[1em] mr-2 text-[14px]`}
            />
            <div className="leading-tight min-w-0">
              <div className="flex flex-col">
                <div className="font-medium text-[#24292f] truncate sm:pt-[2px]">
                  {child.name}
                </div>
                <div className="font-normal text-[#57606a] mt-1 truncate">
                  {child.description}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };
    switch (type) {
      case "label":
        return matchChildLabel(item);
      case "assignee":
        return matchChildAssign(item);
      default:
        return "";
    }
  };
  const forMapItem = (element, index) => {
    const child = matchChild(element);

    return (
      <a
        key={element.id}
        href="#/"
        className={`flex items-start w-full p-4 overflow-hidden text-[#24292f] text-left cursor-pointer border-b ${
          list.length - 1 !== index ? "border-solid" : "border-none"
        } hover:bg-[rgba(234,238,242,0.5)] border-b-[hsla(210,18%,87%,1)] sm:pt-[7px] sm:pb-[7px]`}
      >
        <div className="flex items-start mr-2">
          {check && (
            <CheckIcon
              fill={
                check.includes(element.login || element.name) ? "#000" : "#fff"
              }
            />
          )}
        </div>
        {child}
      </a>
    );
  };
  const child = list.map(forMapItem);
  return (
    <div className="sm:relative">
      <div className="text-[14px] sm:text-[12px]">
        <div
          className="
          fixed top-0 left-0 right-0 bottom-0 flex p-4 flex-col z-[100] sm:z-[1] sm:absolute sm:top-auto sm:right-auto sm:left-auto sm:bottom-auto sm:p-0  lg:right-0 lg:top-[-5px]"
        >
          <div className="h-4/5 mt-0 bg-[#ffffff] border border-solid border-[rgba(0,0,0,0)] rounded-xl sm:border-[hsla(210,18%,87%,1)] sm:h-auto sm:max-h-[520px] sm:mt-2 sm:w-[300px]">
            <header className="flex p-4 items-center border-b border-solid border-b-[hsla(210,18%,87%,1)] sm:pt-[7px] sm:pr-[7px] sm:pb-[7px] ">
              {type === "label" && (
                <span className="font-semibold flex-1 text-[5px]">
                  Apply labels to this issue
                </span>
              )}
              {type === "assignee" && (
                <span className="font-semibold flex-1 text-[5px]">
                  Assign up to 10 people to this issue
                </span>
              )}
              <button
                className="cursor-pointer p-4 m-[-16px] leading-none rounded-none"
                onClick={callback}
              >
                <XIcon fill={"#57606a"} />
              </button>
            </header>
            <div className="p-4 m-0 border-b border-solid border-b-[hsla(210,18%,87%,1)] sm:p-2">
              <Input type={type} />
            </div>
            <div className="overflow-y-auto max-h-[calc(100%-126px)] sm:max-h-[calc(485px-82px)]">
              <div className="bg-[#f6f8fa] flex items-start w-full p-4 overflow-hidden text-[#24292f] text-left cursor-pointer border-b border-solid border-b-[hsla(210,18%,87%,1)] sm:pt-[7px] sm:pb-[7px]">
                {type === "assignee" && (
                  <span className="font-semibold ">Suggestions</span>
                )}
                {/* {type === "assignee" && (
                  <>
                    <XIcon fill={"#57606a"} />
                    <span className="font-semibold ">Clear assignees</span>
                  </>
                )} */}
              </div>
              {child}
            </div>{" "}
            {type === "label" && (
              <div className="flex h-[32px] p-[8px] pl-[30px] border border-solid border-t-[#d0d7de] border-r-0 border-l-0 border-b-0">
                <PencilIcon
                  size={16}
                  className={`mt-px rounded-[2em] w-[1em] h-[1em] mr-2 text-[14px]`}
                />

                <div className="font-medium text-[#24292f] truncate sm:pt-[2px]">
                  Edit labels
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
