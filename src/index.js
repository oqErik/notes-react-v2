import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Notes from "./Components/Notes/Notes";
import NotesState from './Context/NotesState'
import App from './App';
import AdminNotes from './Components/Admin/AdminNotes';
import AdminUsers from './Components/Admin/AdminUsers';
import Home from './Components/Home';
import NoRoute from './Components/NoRoute';
import ProtectedRoute from './Components/ProtectedRoute'

import AdminRoute from './Components/AdminRoute';
import Profile from './Components/Users/Profile';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );


root.render(
  <BrowserRouter>
    <React.StrictMode>
      <NotesState>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
            <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="admin">
              <Route path="" element={<NoRoute />} />
              <Route path="users" element={<ProtectedRoute> <AdminRoute><AdminUsers /></AdminRoute></ProtectedRoute>} />
              <Route path="notes" element={<ProtectedRoute> <AdminRoute><AdminNotes /></AdminRoute></ProtectedRoute>} />
            </Route>
            <Route path="*" element={<NoRoute />} />
          </Route >
        </Routes>
      </NotesState>
    </React.StrictMode>
  </BrowserRouter >
);

