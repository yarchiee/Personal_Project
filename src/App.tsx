import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Labels from "./pages/Labels";
import IssueList from "./pages/IssueList/IssueList";
import IssuePage from "./pages/IssuePage/IssuePage";
import NewIssuePage from "./pages/NewIssuePage/NewIssuePage";
// import Oauth from "./pages/Oauth/Oauth";
import GithubOauth from "./pages/Oauth/GithubOAuth";
import { ResetStyle, GlobalStyle } from "./components/globalStyle";
import { Navigate, Route, Routes } from "react-router-dom";
import { SelectContext } from "./context/SelectContext";
import { repoLabelArr } from "../src/type";
import { useState, useEffect } from "react";
const REPOSITORY = "github-project";
function App() {
  const [repoLabelArr, setRepoLabelArr] = useState<repoLabelArr>(
    [] as unknown as repoLabelArr
  );
  const [selectedEdit, setSelectedEdit] = useState<number>();
  const returnContext = () => {
    // console.log(selectedEdit);
  };
  useEffect(returnContext, [selectedEdit]);
  return (
    <>
      <SelectContext.Provider
        value={{
          repoLabelArr: [repoLabelArr, setRepoLabelArr],
          selectedEdit: [selectedEdit, setSelectedEdit],
        }}
      >
        <ResetStyle />
        <GlobalStyle />
        <Header />

        <Routes>
          <Route
            path={`/${REPOSITORY}/github-ooath`}
            element={<GithubOauth />}
          ></Route>
          {/* <Route path={`/${REPOSITORY}/ooath`} element={<Oauth />}></Route> */}

          <Route path={`/${REPOSITORY}/labels`} element={<Labels />}></Route>

          <Route path={`/${REPOSITORY}`} element={<IssueList />}></Route>
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
      </SelectContext.Provider>
    </>
  );
}

export default App;
