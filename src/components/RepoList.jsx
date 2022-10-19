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
    console.log("repo");
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
      <li key={item.id} onClick={() => redirectRepoItem(item.name, target)}>
        {item.name}
      </li>
    );
  };
  const child = list.map(forMapItem);
  return (
    <ul>
      {child}
    </ul>
  );
}

export default RepoList;
