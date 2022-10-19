import Home from "./pages/Home";
import Labels from "./pages/Labels";
import NotLogin from "./components/NotLogin";
import RepoList from "./components/RepoList";
import IssueList from "./pages/IssueList";
import IssuePage from "./pages/IssuePage";
import NewIssuePage from "./pages/NewIssuePage";
// import Oauth from "./pages/Oauth/Oauth";
import GithubOauth from "./pages/Oauth/GithubOAuth";
import { Navigate, Route, Routes } from "react-router-dom";
import { PageState, SetPageState } from "./context";
import Loader from "./context/Loader";
import { useState, useEffect, useContext } from "react";

function App() {
  const initialPageState = useContext<any>(PageState);
  const [pageState, setPageState] = useState(initialPageState);

  const updatePageState = (obj) => {
    const newData = { ...obj };
    setPageState(newData);
  };
  const updateUserInfo = () => {
    const { userInfo } = pageState;
    let newObj = { ...pageState };
    if (Object.keys(userInfo).length <= 0) {
      let storageUserInfo = {};
      const sessionStorageUserInfo = sessionStorage.getItem("userInfo")
        ? JSON.parse(sessionStorage.getItem("userInfo"))
        : {};
      const localStorageUserInfo = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : {};
      Object.keys(sessionStorageUserInfo).length > 0
        ? (storageUserInfo = { ...sessionStorageUserInfo })
        : (storageUserInfo = { ...localStorageUserInfo });
      newObj = { ...newObj, userInfo: storageUserInfo };
    }
    newObj.status = "finish";
    updatePageState(newObj);
  };
  useEffect(updateUserInfo, []);
  return (
    <>
      <PageState.Provider value={pageState}>
        <SetPageState.Provider value={updatePageState}>
          <Loader>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route index element={<NotLogin />} />
                <Route path=":userId">
                  <Route index element={<RepoList />} />
                  <Route path=":userRepo">
                    <Route path="issues">
                      <Route index element={<IssueList />} />
                      <Route path=":issueNumber" element={<IssuePage />} />
                      <Route path="new" element={<NewIssuePage />}></Route>
                    </Route>
                    <Route path="labels" element={<Labels />}></Route>
                    <Route
                      path="github-ooath"
                      element={<GithubOauth />}
                    ></Route>
                  </Route>
                </Route>
              </Route>
            </Routes>
          </Loader>
        </SetPageState.Provider>
      </PageState.Provider>
    </>
  );
}

export default App;
