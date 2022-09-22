import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Label from "./pages/Labels/Label";
import IssueList from "./pages/IssueList/IssueList";
import IssuePage from "./pages/IssuePage/IssuePage";
import NewIssuePage from "./pages/NewIssuePage/NewIssuePage";
import Oauth from "./pages/Oauth/Oauth";
import GithubOauth from "./pages/Oauth/GithubOAuth";
import { ResetStyle, GlobalStyle } from "./components/globalStyle.js";
import { Navigate, Route, Routes } from "react-router-dom";
import { SelectContext } from "./utils/SelectContext";
import { RepoLabelArr } from "../src/type";

import { useState } from "react";
const REPOSITORY = "github-project";

function App() {
  const [RepoLabelArr, setRepoLabelArr] = useState<RepoLabelArr>(
    [] as unknown as RepoLabelArr
  );
  const [selectedEdit, setSelectedEdit] = useState<number>();
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route
          path={`/${REPOSITORY}/github-ooath`}
          element={<GithubOauth />}
        ></Route>
        <Route path={`/${REPOSITORY}/ooath`} element={<Oauth />}></Route>
        <SelectContext.Provider
          value={{
            RepoLabelArr: [RepoLabelArr, setRepoLabelArr],
            selectedEdit: [selectedEdit, setSelectedEdit],
          }}
        >
          <Route path={`/${REPOSITORY}`} element={<Label />}></Route>
        </SelectContext.Provider>
        <Route
          path={`/${REPOSITORY}/issuelist`}
          element={<IssueList />}
        ></Route>
        <Route
          path={`/${REPOSITORY}/issuepage`}
          element={<IssuePage />}
        ></Route>
        <Route
          path={`/${REPOSITORY}/newissuepage`}
          element={<NewIssuePage />}
        ></Route>
        <Route
          path={"*"}
          element={<Navigate to={`/${REPOSITORY}`} replace />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
