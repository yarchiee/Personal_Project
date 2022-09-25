import { useState, useEffect, Dispatch, SetStateAction } from "react";
import LabelList from "./LabelList";
import api from "../../services/api";

function Labels() {
  const [list, setList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  console.log(refresh);

  const fetchData = () => {
    api.listLabelAll().then((res) => {
      const data = [...res];
      setList(data);
      setRefresh((prev) => !prev);
    });
  };
  useEffect(fetchData, []);
  return <LabelList list={list} callback={fetchData} />;
}

export default Labels;
