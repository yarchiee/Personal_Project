import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Label from "./pages/Label";
import IssueList from "./pages/IssueList";
import IssuePage from "./pages/IssuePage";
import NewIssuePage from "./pages/NewIssuePage";
import Oauth from "./pages/Oauth";
import { ResetStyle, GlobalStyle } from "./components/globalStyle.js";
import { Navigate, Route, Routes } from "react-router-dom";
const REPOSITORY = "github-project";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path={`/${REPOSITORY}/ooath`} element={<Oauth />}></Route>
        <Route path={`/${REPOSITORY}`} element={<Label />}></Route>
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
