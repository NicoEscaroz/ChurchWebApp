// src/layout/layout.jsx
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BiMessageSquareDots } from "react-icons/bi";
import { CgArrowsV } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import {
  IoIosLogOut,
  IoIosNotifications,
  IoMdBook,
  IoMdHome,
  IoMdSettings,
} from "react-icons/io";
import { MdEventNote, MdGroups, MdPermMedia } from "react-icons/md";
import { Link, useLocation } from "react-router-dom"; // Añadimos useLocation
import logo from "../assets/folded-hands.svg";
import profilePicture from "../assets/fotoperfil.jpg";
import DonationsCard from "../components/DonationsCard/DonationsCard.jsx";
import EventsCard from "../components/EventsCard/EventsCard.jsx";
import GroupsCard from "../components/GroupsCard/GroupsCard.jsx";
import PrayersCard from "../components/PrayersCard/PrayersCard.jsx";
import { auth, authDB } from "../firebase/firebase";
import "./layout.css";

function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/inicio";

  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("Authenticated user UID:", user.uid);
        const docRef = doc(authDB, "Users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log("User data:", docSnap.data());
        } else {
          console.log("User not found in Firestore.");
        }
      } else {
        console.log("No user is authenticated.");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      console.log("Logout successful");
      setUserDetails(null); // Reset user details on logout
    } catch (error) {
      console.log("Error logging out: ", error.message);
    }
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="user">
          <div className="nameApp">
            <img src={logo} alt="" style={{ cursor: "pointer" }} />
          </div>
          <div className="rectangle">
            <div>
              {userDetails ? (
                <h2>
                  {userDetails.firstName}&nbsp;{userDetails.lastName}
                </h2>
              ) : (
                <h2>Loading...</h2>
              )}
              <h1>Budista</h1>
            </div>
            <div>
              <CgArrowsV style={{ cursor: "pointer", fontSize: "30px" }} />
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
            <Link to="/login">
              <li onClick={handleLogout}>
                <IoIosLogOut /> Logout
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
                style={{ cursor: "pointer", color: "#555", fontSize: "25px" }}
              />
            </div>
            <div className="community"></div>
          </div>

          <div className="user-info">
            <BiMessageSquareDots
              style={{ cursor: "pointer", color: "#555", fontSize: "25px" }}
            />
            <IoIosNotifications
              style={{ cursor: "pointer", color: "#555", fontSize: "25px" }}
            />
            <img src={profilePicture} alt="" style={{ cursor: "pointer" }} />
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
