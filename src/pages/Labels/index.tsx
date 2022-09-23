import { useState, useEffect, Dispatch, SetStateAction } from "react";
import LabelList from "./LabelList";
import api from "../../service/api";

function Labels() {
  const [list, setList] = useState([]);
  const fetchData = () => {
    api.listLabelAll().then((res) => {
      setList(res);
    });
  };
  useEffect(fetchData, []);
  return <LabelList list={list} />;
}

export default Labels;
