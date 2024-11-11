// layout.jsx
import React from 'react';
import './layout.css';
import PrayersCard from './PrayersCard';
import { BookOpen, ChevronRight } from 'lucide-react';
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
import { MdAttachMoney } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import { CgArrowsV } from 'react-icons/cg';
import { FaHeart } from 'react-icons/fa';
import { MdArrowForwardIos } from 'react-icons/md';

function Layout({ children }) {
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
            <li>
              <IoMdHome />
              Inicio
            </li>
            <li>
              <MdEventNote />
              Eventos
            </li>
            <li>
              <MdGroups />
              Grupos
            </li>
            <li>
              <IoMdBook />
              Oraciones
            </li>
            <li>
              <MdPermMedia />
              Medios
            </li>
            <li>
              <FaHeart />
              Donaciones
            </li>
            <li>
              <IoMdSettings />
              Configuración
            </li>
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
          {children}
          <div className="dashboardName">
            <h2>ChurchWebApp</h2>
          </div>
          <div className="card-container">
            <div className="cards-row">
              <div className="card">
                <div className="cardInfo">
                  <div className="icon-box-event">
                    <MdEventNote />
                  </div>
                  <h2>Eventos</h2>
                  <div className="cardMoreInfo">
                    <h2>Ver todos</h2>
                  </div>
                </div>
                <div className="groups">
                  <div className="event">
                    <h2>Evento1</h2>
                    <MdArrowForwardIos />
                  </div>
                  <div className="event">
                    <h2>Evento2</h2>
                    <MdArrowForwardIos />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="cardInfo">
                  <div className="icon-box-groups">
                    <MdGroups />
                  </div>
                  <h2>Grupos</h2>
                  <div className="cardMoreInfo">
                    <h2>Ver todos</h2>
                  </div>
                </div>
                <div className="events">
                  <div className="event">
                    <h2>Grupo1</h2>
                    <MdArrowForwardIos />
                  </div>
                  <div className="event">
                    <h2>Grupo2</h2>
                    <MdArrowForwardIos />
                  </div>
                  <div className="event">
                    <h2>Grupo3</h2>
                    <MdArrowForwardIos />
                  </div>
                </div>
              </div>
            </div>
            <div className="cards-row">
              <PrayersCard />
              <div className="card">
                <div className="cardInfo">
                  <div className="icon-box-prayers">
                    <IoMdBook />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Layout;
