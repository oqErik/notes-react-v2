import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Notes from "./Components/Notes/Notes";
import NotesState from './Context/NotesState'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Users from './Components/Users/Users';
import AdminNotes from './Components/Admin/AdminNotes';
import AdminUsers from './Components/Admin/AdminUsers';
import Home from './Components/Home/Home';
import NoRoute from './Components/NoRoute';
import ProtectedRoute from './Components/ProtectedRoute'

import './index.css'

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );


root.render(
  <BrowserRouter>
    <React.StrictMode>
      <NotesState>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
            <Route path="login" element={<Users />} />
            <Route path="admin">
              <Route path="" element={<NoRoute />} />
              <Route path="users" element={<ProtectedRoute><AdminUsers /></ProtectedRoute>} />
              <Route path="notes" element={<ProtectedRoute><AdminNotes /></ProtectedRoute>} />
            </Route>
            <Route path="*" element={<NoRoute />} />
          </Route >
        </Routes>
      </NotesState>
    </React.StrictMode>
  </BrowserRouter >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
