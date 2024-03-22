import React from "react";
import "./App.css";
import Starto from "./Starto";
import Group from "./Group";
import Engineering from "./Engineering";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Group />} />
      <Route path="stratolift" element={<Starto />} />
      <Route path="stablearc-engineering" element={<Engineering />} />
    </>
  )
);
const App = () => <RouterProvider router={router} />;
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Group />} />
//         <Route path="stratolift" element={<Starto />} />
//         <Route path="stablearc-engineering" element={<Engineering />} />
//         {/* <Route path="faqs" element={<Faqs />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
