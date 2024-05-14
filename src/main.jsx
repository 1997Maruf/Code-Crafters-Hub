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
import UpdateAssignments from './Component/UpdateAssignments/UpdateAssignments';
import ViewAssignment from './Pages/ViewAssignment/ViewAssignment';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AssignmentSubmission from './Pages/AssignmentSubmission/AssignmentSubmission';
import PendingAssignments from './Pages/PendingAssignments/PendingAssignments';
import GiveMarks from './Pages/GiveMarks/GiveMarks';

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
        element: <PrivateRoute><AddAssignment></AddAssignment></PrivateRoute>
      },
      {
        path: "/assignment",
        element: <Assignments></Assignments>,
        loader: ()=> fetch('http://localhost:5000/assignment')
      },
      
      {
        path: "/updateAssignment/:id",
        element : <PrivateRoute><UpdateAssignments></UpdateAssignments></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/assignment/${params.id}`)
      },
      {
       path: "/view/:id",
       element : <PrivateRoute><ViewAssignment></ViewAssignment></PrivateRoute>,
       loader: ({params})=> fetch(`http://localhost:5000/assignment/${params.id}`)
      },
      {
        path: "/sub/:id",
        element : <AssignmentSubmission></AssignmentSubmission>,
        loader: ({params})=> fetch(`http://localhost:5000/assignment/${params.id}`)
      },
      {
        path: "/pending",
        element: <PendingAssignments></PendingAssignments>,
        loader: ()=> fetch('http://localhost:5000/submitAssignment')
       
      },
      {
        path: "/givemarks/:id",
        element: <GiveMarks></GiveMarks>,
        loader: ({params})=> fetch(`http://localhost:5000/submitAssignment/${params.id}`)

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
