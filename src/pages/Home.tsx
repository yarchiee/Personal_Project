import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ResetStyle, GlobalStyle } from "../components/globalStyle";

import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Home;
