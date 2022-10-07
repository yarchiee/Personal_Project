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
  selectedAvatarUrl,
  setSelectedAvatarUrl,
  selectedLabelColor,
  setSelectedLabelColor,
}) {
  console.log(newCreateIssue);
  const matchChildAssign = (child) => {
    return (
      <>
        <div
          onClick={() => {
            let tmp = [...whoIsAssignee];
            let che = [...check];
            let url = [...selectedAvatarUrl];
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
              setSelectedAvatarUrl(
                remove(selectedAvatarUrl, (urlText) => {
                  return urlText !== child.avatar_url;
                })
              );
              return;
            }
            setCheck(uniq([...che, child.login]));
            setWhoIsAssignee(uniq([...tmp, child.login]));
            setSelectedAvatarUrl(uniq([...url, child.avatar_url]));
          }}
          className="flex grow"
        >
          <img
            className="w-[20px] h-[20px] mr-[5px] rounded-[50%]"
            src={child.avatar_url}
            alt=""
          />
          <div className="w-full leading-tight min-w-0">
            <div className="flex items-center">
              <div className={`w-full font-semibold truncate md:pt-[2px]`}>
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
              let color = [...selectedLabelColor];
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
                setSelectedLabelColor(
                  remove(selectedLabelColor, (colorText) => {
                    return colorText !== child.color;
                  })
                );
                return;
              }
              setCheck(uniq([...check, child.name]));
              setSelectedLabel([...tmp, child.name]);
              setSelectedLabelColor([...color, child.color]);
            }}
            className="flex w-full"
          >
            <span
              style={{ backgroundColor: `#${child.color}` }}
              className={`mt-px rounded-[2em] w-[1em] h-[1em] mr-2 text-[14px]`}
            />
            <div className="leading-tight min-w-0 grow">
              <div className="flex flex-col grow">
                <div className="font-medium text-[#24292f] truncate md:pt-[2px] grow">
                  {child.name}
                </div>
                <div className="font-normal text-[#57606a] mt-1 truncate grow ">
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
        className={`flex items-start w-full p-4 overflow-hidden text-left cursor-pointer border-b ${
          list.length - 1 !== index ? "border-solid" : "border-none"
        } 
      ${
        type === "assignee"
          ? "hover:bg-[#0969DA] hover:text-[#ffffff] "
          : "hover:bg-[rgba(234,238,242,0.5)] hover:text-[#24292f]"
      }
      ${type === "assignee" ? "hover:text-[#ffffff]" : "hover:text-[#24292f]"}
        border-b-[hsla(210,18%,87%,1)] md:pt-[7px] md:pb-[7px]`}
      >
        <div className="flex items-start mr-2  ">
          {check && (
            <div
              className={`${
                check.includes(element.login || element.name)
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <CheckIcon />
            </div>
          )}
        </div>
        {child}
      </a>
    );
  };
  const child = list.map(forMapItem);
  const clearAll = () => {
    setSelectedAvatarUrl([]);
    setWhoIsAssignee([]);
    setCheck([]);
  };
  return (
    <div className="md:relative">
      <div className="text-[14px] md:text-[12px]">
        <div className="fixed top-0 left-0 right-0 bottom-0 flex p-4 flex-col z-[100] md:z-[1] md:absolute  md:left-auto md:bottom-auto md:p-0  md:right-0 md:top-[-5px]">
          <div className="h-4/5 mt-0 bg-[#ffffff] border border-solid border-[rgba(0,0,0,0)] rounded-xl md:border-[hsla(210,18%,87%,1)] md:h-auto md:max-h-[520px] md:mt-2 md:w-[300px]">
            <header className="flex p-4 items-center border-b border-solid border-b-[hsla(210,18%,87%,1)] md:pt-[7px] md:pr-[7px] md:pb-[7px] ">
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
            <div className="p-4 m-0 border-b border-solid border-b-[hsla(210,18%,87%,1)] md:p-2">
              <Input type={type} />
            </div>
            <div className="overflow-y-auto max-h-[calc(100%-126px)] md:max-h-[calc(485px-82px)]">
              {newCreateIssue.assignees.length > 0 && (
                <a
                  onClick={clearAll}
                  href="#/"
                  className="flex items-start w-full p-4 overflow-hidden text-[#24292f] text-left cursor-pointer border-b border-solid border-b-[hsla(210,18%,87%,1)] md:pt-[7px] md:pb-[7px] hover:bg-[#0969DA] hover:text-[#fff]"
                >
                  <div className="flex items-start mr-2 ">
                    <XIcon />
                  </div>
                  <span className="font-semibold">Clear assignees</span>
                </a>
              )}

              <div className="bg-[#f6f8fa] flex items-start w-full p-4 overflow-hidden text-[#24292f] text-left cursor-pointer border-b border-solid border-b-[hsla(210,18%,87%,1)] md:pt-[7px] md:pb-[7px]">
                {type === "assignee" && (
                  <span className="font-semibold ">Suggestions</span>
                )}
              </div>
              {child}
            </div>
            {type === "label" && (
              <div className="flex h-[32px] p-[8px] pl-[30px] border border-solid border-t-[#d0d7de] border-r-0 border-l-0 border-b-0">
                <PencilIcon
                  size={16}
                  className={`mt-px rounded-[2em] w-[1em] h-[1em] mr-2 text-[14px]`}
                />

                <div className="font-medium text-[#24292f] truncate md:pt-[2px]">
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
