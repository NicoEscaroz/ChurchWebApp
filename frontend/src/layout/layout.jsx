// src/layout/layout.jsx
import React from 'react';
import './layout.css';
import { Link, useLocation } from 'react-router-dom'; // Añadimos useLocation
import PrayersCard from '../components/PrayersCard/PrayersCard.jsx';
import DonationsCard from '../components/DonationsCard/DonationsCard.jsx';
import EventsCard from '../components/EventsCard/EventsCard.jsx';
import GroupsCard from '../components/GroupsCard/GroupsCard.jsx';
import profilePicture from '../assets/fotoperfil.jpg';
import logo from '../assets/folded-hands.svg';
import { CiSearch } from 'react-icons/ci';
import { IoIosNotifications } from 'react-icons/io';
import { BiMessageSquareDots } from 'react-icons/bi';
import { IoMdHome } from 'react-icons/io';
import { MdEventNote } from 'react-icons/md';
import { MdGroups } from 'react-icons/md';
import { IoMdBook } from 'react-icons/io';
import { MdPermMedia } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { CgArrowsV } from 'react-icons/cg';

function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/inicio';

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="user">
          <div className="nameApp">
            <img src={logo} alt="" style={{ cursor: 'pointer' }} />
          </div>
          <div className="rectangle">
            <div>
              <h2>José Arcadio</h2>
              <h1>Budista</h1>
            </div>
            <div>
              <CgArrowsV style={{ cursor: 'pointer', fontSize: '30px' }} />
            </div>
          </div>
        </div>
        <nav className="navbar">
          <ul>
            <Link to="/">
              <li>
                <IoMdHome /> Inicio
              </li>
            </Link>
            <Link to="/eventos">
              <li>
                <MdEventNote /> Eventos
              </li>
            </Link>
            <Link to="/grupos">
              <li>
                <MdGroups /> Grupos
              </li>
            </Link>
            <Link to="/oraciones">
              <li>
                <IoMdBook /> Oraciones
              </li>
            </Link>
            <Link to="/medios">
              <li>
                <MdPermMedia /> Medios
              </li>
            </Link>
            <Link to="/donaciones">
              <li>
                <FaHeart /> Donaciones
              </li>
            </Link>
            <Link to="/configuracion">
              <li>
                <IoMdSettings /> Configuración
              </li>
            </Link>
          </ul>
        </nav>
      </aside>

      <main className="content">
        <header className="header">
          <div className="header-container">
            <div className="search">
              <CiSearch
                style={{ cursor: 'pointer', color: '#555', fontSize: '25px' }}
              />
            </div>
            <div className="community"></div>
          </div>

          <div className="user-info">
            <BiMessageSquareDots
              style={{ cursor: 'pointer', color: '#555', fontSize: '25px' }}
            />
            <IoIosNotifications
              style={{ cursor: 'pointer', color: '#555', fontSize: '25px' }}
            />
            <img src={profilePicture} alt="" style={{ cursor: 'pointer' }} />
          </div>
        </header>

        <section className="main-content">
          {isHome ? (
            <div className="card-container">
              <div className="cards-row">
                <EventsCard />
                <GroupsCard />
              </div>
              <div className="cards-row">
                <PrayersCard />
                <DonationsCard />
              </div>
            </div>
          ) : (
            children
          )}
        </section>
      </main>
    </div>
  );
}

export default Layout;
