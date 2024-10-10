import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../layout";
import Main from "../Main";
import NotFound from "../NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router