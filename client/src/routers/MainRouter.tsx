import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WelcomePage } from "../pages";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome/:userId" element={<WelcomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
