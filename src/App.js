import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css';
import Layout from "./pages/layout";
import Root from "./pages/root";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";

function App() {
    
  const router = createBrowserRouter([
    {
      path : "/",
      Component: Layout,
      children:[
        {index: true, Component:Root},
        { Component: Contact, path : "/contact"},
        { Component: Portfolio, path : "portfolio", children: [
          // {Component}
        ]}
      ]
    }
  ])

  return (
      <RouterProvider router={router}/>
  );
}

export default App;
