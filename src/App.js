import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Content } from "./layout";

export default function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path="/dashboard/*" element={<Content />} />
      </Routes>
    </div>
  );
}
