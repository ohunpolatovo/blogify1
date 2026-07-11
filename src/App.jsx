import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from "./pages/public/Home"
import PostDetail from './pages/public/PostDetail'
import ErrorPage from './pages/public/ErrorPage'
import Posts from "./pages/public/Posts"

import LoginPage from './pages/auth/LoginPage'

import Dashboard  from './pages/admin/Dashboard'
import UpdatePost from './pages/admin/UpdatePost'
import CeratePost from './pages/admin/CreatePost'

import AdminLayout from './layouts/AdminLayout'
import PublicLayout from './layouts/PublicLayout'
import Authlayout from './layouts/Authlayout'
import CreatePost from './pages/admin/CreatePost'

function App() {

    const routes=createBrowserRouter([
        {
            path: "/",
            element: <PublicLayout/>,
            children:[
                {
                    index:true,
                    element:<Home/>
                },
                {
                    path:"/posts",
                    element:<Posts/>,
                },
                {
                    path:"/posts/:id",
                    element:<PostDetail/>,
                },
            ],
        },
        
        {
path:"/admin",
element:<AdminLayout/>,
children:[
    {
    index:true,
    element:<Dashboard/>
},
{
    path:'updatepost',
    element:<UpdatePost/>
},
{
    path:"createpost",
    element:<CreatePost/>
}

]
        },
        {
            path: '/login',
            element: <Authlayout/>,
                        children: [
                {
index:true,
element:<LoginPage/>
            },
          ],
        },
        {
            path:'*',
            element:<ErrorPage/>
        }
    ]);



  return <RouterProvider router={routes}/>
    
  
}

export default App
