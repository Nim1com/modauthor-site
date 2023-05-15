// import ModMenu from './ModMenu';
import "./Dashboard.css";

import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import ModForm from "./AddModForm";
import ModList from "./ModList";

const Dashboard = ({ onLogout }) => {
  const notify = () => toast.info('If you want to sponsor and have your mod appear at the top of the list, contact me! contact.urlou@passfwd.com', {
    position: "top-right",
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
    toastId: 1,
  });

  useEffect(() => {
    notify();
  }, []);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    onLogout();
  };

  const handleOpenModForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="dashboard-container">
      <div class="container">
        <button onClick={() => setNavbarOpen(!navbarOpen)} class="open">
          Open Nav
        </button>
        {navbarOpen && (
          <nav class="navbar">
            <button onClick={() => setNavbarOpen(!navbarOpen)}>X</button>

            <div class="nav-icon">
              <img src="/logo512.png"></img>
            </div>
            <ul class="nav-links">
              <li>
                <a href="/">Dashboard</a>
              </li>
              <li>
                <a href="https://astromods.xyz">Mods</a>
              </li>
              <li>
                <a href="/settings">Settings</a>
              </li>
              <li>
                <a onClick={notify} href="#">Sponsor</a>
                <ToastContainer />
              </li>
            </ul>
            <div class="logout">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </nav>
        )}
      </div>
      <div class="content">
        <div className="dashboard-no-mod-list-container">
          <h2>Dashboard</h2>
          <p>Welcome to your dashboard</p>
        </div>
        <ModList />
        <div className="dashboard-no-mod-list-container">
          <button class="add" onClick={handleOpenModForm}>
            {isFormOpen ? "Close" : "Add Mod"}
          </button>
          {isFormOpen && <ModForm />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
