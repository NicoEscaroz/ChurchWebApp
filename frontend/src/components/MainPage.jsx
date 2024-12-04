import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { auth, authDB } from "../firebase/firebase";

export function MainPage() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state to show a spinner or loading message

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("Authenticated user UID:", user.uid); // Log the UID to check if it matches the Firestore document ID
        const docRef = doc(authDB, "Users", user.uid); // Firestore collection name is 'Users'
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log("User data:", docSnap.data()); // Log the data to verify it's correct
          setLoading(false); // Set loading to false after fetching data
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

  // Logout handler
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
    <div>
      {loading ? (
        <p>Loading...</p> // Show loading message while fetching data
      ) : userDetails ? (
        <>
          <h3>Welcome {userDetails.firstName}</h3>
          <div>
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.firstName}</p>
            <p>Last Name: {userDetails.lastName}</p>
          </div>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Please log in to see your details.</p> // Show message if no user is logged in
      )}
    </div>
  );
}

export default MainPage;
