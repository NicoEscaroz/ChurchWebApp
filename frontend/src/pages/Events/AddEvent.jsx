import axios from "axios";
import { getAuth } from "firebase/auth";
import React, { useState } from "react";

const AddEvent = ({ onClose, onEventAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    const currentUser = auth.currentUser;
    if (!currentUser) {
      setError("User is not authenticated");
      setIsSubmitting(false);
      return;
    }

    try {
      const idToken = await auth.currentUser.getIdToken(true);
      const newEvent = { title, description, date, userId: currentUser.uid };
      const response = await axios.post(
        "http://localhost:5000/api/events",
        newEvent,
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      setTitle("");
      setDescription("");
      setDate("");

      onEventAdded(response.data); // Pass the new event to the parent component
      onClose(); // Close the modal after saving
    } catch (error) {
      console.error("Error adding event:", error);

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data.message || "Failed to add event");
        console.error("Error response:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response received from server");
        console.error("Error request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        setError("Error setting up the request");
        console.error("Error message:", error.message);
      }

      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          disabled={isSubmitting}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          disabled={isSubmitting}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          disabled={isSubmitting}
        />
        <button type="submit" disables={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Event"}
        </button>
        <button type="button" onClick={onClose} disabled={isSubmitting}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
