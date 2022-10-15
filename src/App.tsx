import Home from "./pages/Home";
import Labels from "./pages/Labels";
import IssueList from "./pages/IssueList";
import IssuePage from "./pages/IssuePage";
import NewIssuePage from "./pages/NewIssuePage";
// import Oauth from "./pages/Oauth/Oauth";
import GithubOauth from "./pages/Oauth/GithubOAuth";
import { Route, Routes } from "react-router-dom";

const REPOSITORY = "github-project";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="issues">
            <Route index element={<IssueList />} />
            <Route path=":issueNumber" element={<IssuePage />} />
            <Route path="new" element={<NewIssuePage />}></Route>
          </Route>
          <Route path="labels" element={<Labels />}></Route>
        </Route>
      </Routes>
      {/* <Routes>
          <Route path="/" element={<IssueList />}></Route>
          <Route
            path="github-ooath"
            element={<GithubOauth />}
          ></Route> */}
      {/* <Route path={`ooath`} element={<Oauth />}></Route> */}
      {/* </Routes> */}
    </>
  );
}

export default App;
