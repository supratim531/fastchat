import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<ProtectedRoute Children={<App />} />}>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={
          <div className="font-medium text-4xl">No Page Found</div>
        } />
      </Route>
      <Route path="/login" element={<Login />} />
    </>
  )
);

export default router;
