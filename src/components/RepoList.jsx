import { useEffect, useState, useContext } from "react";
import { PageState } from "../context";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

function RepoList() {
  const navigate = useNavigate();
  const pageState = useContext(PageState);
  const { userInfo } = pageState;
  const [list, setList] = useState([]);
  const getUserRepo = (userName) => {
    api.getUserRepo(userName).then((res) => {
      setList(res);
    });
  };

  const fetchData = () => {
    const targetUser = userInfo.userName;
    if (targetUser) {
      getUserRepo(targetUser);
    }
  };
  useEffect(fetchData, [userInfo]);

  const redirectRepoItem = (repo, path) => {
    const newSetting = {
      owner: userInfo.userName,
      repo: repo,
    };
    api.updateSetting(newSetting);
    navigate(path);
  };
  const forMapItem = (item) => {
    const target = `${item.name}/issues`;
    return (
      <li
        className=" cursor-pointer  text-[#52575d] hover:text-[#fff] hover:bg-[#000] border border-solid border-[#d0d7de] px-[10px] mb-[15px]"
        key={item.id}
        onClick={() => redirectRepoItem(item.name, target)}
      >
        {item.name}
      </li>
    );
  };
  const child = list.map(forMapItem);
  return (
    <div className="px-[20%]">
      <ul className="mt-[50px] h-[470px] text-[20px] font-semibold mt w-full flex flex-col justify-center text-center leading-[50px]">
        <div className="text-[#000] mb-[20px]">Choose a repository.</div>
        <div className="flex-col">{child}</div>
      </ul>
    </div>
  );
}

export default RepoList;
