import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const Teachers = lazy(() => import("./pages/TeachersPage/TeachersPage.jsx"));
const Favorite = lazy(() => import("./pages/FavoritesPage/FavoritePage.jsx"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="favorites" element={<Favorite />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
