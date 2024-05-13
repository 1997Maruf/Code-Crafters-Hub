import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roote from './Roote/Roote';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import AddAssignment from './Pages/AddAssignment/AddAssignment';
import Assignments from './Pages/Assignments/Assignments';
import AssignmentCard from './Pages/Assignments/AssignmentCard';
import UpdateAssignments from './Component/UpdateAssignments/UpdateAssignments';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roote></Roote>,
    children:[
      {
        path: "/",
        element : <Home></Home>
      },
      {
        path : "/login",
        element: <Login></Login>
      },
      {
        path : "/register",
        element : <Register></Register>
      },
      {
        path: "/addassignment",
        element: <AddAssignment></AddAssignment>
      },
      {
        path: "/assignment",
        element: <Assignments></Assignments>,
        loader: ()=> fetch('http://localhost:5000/assignment')
      },{
        path: "/AssignmentDetals/:id",
        element : <AssignmentCard></AssignmentCard>,
        loader: ({params})=> fetch(`http://localhost:5000/assignment/${params.id}`)
      },
      {
        path: "/updateAssignment/:id",
        element : <UpdateAssignments></UpdateAssignments>,
        loader: ({params})=> fetch(`http://localhost:5000/assignment/${params.id}`)
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
