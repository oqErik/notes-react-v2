import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Notes from "./Components/Notes/Notes";

import App from './App';
import reportWebVitals from './reportWebVitals';
import NotesState from './Context/NotesState'
import UserState from './Context/User/UserState'
import Users from './Components/Users/Users';
import AdminNotes from './Components/Admin/AdminNotes';
import AdminUsers from './Components/Admin/AdminUsers';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <NotesState>
        <UserState>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="notes" element={<Notes />} />
              <Route path="login" element={<Users />} />
              <Route path="admin/users" element={<AdminUsers />} />
              <Route path="admin/notes" element={<AdminNotes />} />
            </Route >
          </Routes>
        </UserState>
      </NotesState>
    </React.StrictMode>
  </BrowserRouter >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
