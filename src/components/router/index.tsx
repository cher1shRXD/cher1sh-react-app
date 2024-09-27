import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../layout";
import Main from "../Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />}/>
        </Route>
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router