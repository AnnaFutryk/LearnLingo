import { Suspense } from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { ColorProvider } from "../Hero/ColorContext";

const Layout = () => {
  return (
    <ColorProvider>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </ColorProvider>
  );
};

export default Layout;
