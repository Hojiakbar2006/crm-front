import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components";
import { CategoryList, Dashboard, ProductList } from "../pages";
import Sidebar from "./sidebar";

const Content = () => {
  return (
    <>
      <Sidebar />
      <div className="w-full p-4 rounded-2xl flex-col justify-center">
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/category-list" element={<CategoryList />} />
        </Routes>
      </div>
    </>
  );
};

export default Content;
