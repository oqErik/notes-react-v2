import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Notes from "./Components/Notes/Notes";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotesState from './Context/NotesState'
import Users from './Components/Users/Users';
const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <NotesState>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="notes" element={<Notes />} />
            <Route path="login" element={<Users />} />
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
