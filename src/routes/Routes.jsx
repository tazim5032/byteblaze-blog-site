import { createBrowserRouter } from "react-router-dom";
import Author from "../Components/Author";
import Content from "../Components/Content";
import MainLayouts from "../Layouts/MainLayouts";
import Blog from "../Pages/Blog";
import Blogs from "../Pages/Blogs";
import Bookmarks from "../Pages/Bookmarks";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>,
          loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
        },
        {
          path: '/blog/:id',
          element: <Blog></Blog>,
          loader: ({ params }) => fetch(`https://dev.to/api/articles/${params?.id}`),
          children: [
              {
                  index: true,
                  element: <Content></Content>,
                  loader: ({ params }) => fetch(`https://dev.to/api/articles/${params?.id}`),
              },
              {
                  path: 'author',
                  element: <Author></Author>,
                  loader: ({ params }) => fetch(`https://dev.to/api/articles/${params?.id}`),
              }
          ]
        },
        {
          path: '/bookmarks',
          element: <Bookmarks></Bookmarks>
        },
      ]
    },
    
    
  ]);