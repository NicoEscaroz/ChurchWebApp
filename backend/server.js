const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Event = require("./models/Events");

dotenv.config();

const admin = require("./firebaseAdmin");
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

// Endpoints
app.get("/", (req, res) => {
  try {
    res.send("Hello World");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.post("/", (req, res) => {
  try {
    res.send("Hello World");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.post("/api/events", verifyToken, async (req, res) => {
  try {
    const { title, description, date, userId } = req.body;

    // Verify that the userId matches the authenticated user
    if (userId !== req.user.uid) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    const newEvent = new Event({
      title,
      description,
      date: new Date(date),
      userID: userId,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    console.error("Event creation error:", err);
    res
      .status(500)
      .json({ message: "Error creating event", error: err.message });
  }
});

app.get("/api/events", verifyToken, async (req, res) => {
  try {
    const userID = req.user.uid;
    const events = await Event.find({ userID }).sort({ date: 1 });

    if (events.length === 0) {
      return res.json([]);
    }

    res.json(events);
  } catch (err) {
    console.error("Fetch events error:", err);
    res
      .status(500)
      .json({ message: "Error fetching events", error: err.message });
  }
});

app.put("/api/events/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, date } = req.body;

    // Find the event and verify ownership
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (event.userID !== req.user.uid) {
      return res
        .status(403)
        .json({ message: "Unauthorized to modify this event" });
    }

    event.title = title;
    event.description = description;
    event.date = new Date(date);

    const updatedEvent = await event.save();
    res.json(updatedEvent);
  } catch (err) {
    console.error("Event update error:", err);
    res
      .status(500)
      .json({ message: "Error updating event", error: err.message });
  }
});

// Delete an event
app.delete("/api/events/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;

    // Find the event and verify ownership
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (event.userID !== req.user.uid) {
      return res
        .status(403)
        .json({ message: "Unauthorized to delete this event" });
    }

    await Event.findByIdAndDelete(id);
    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    console.error("Event deletion error:", err);
    res
      .status(500)
      .json({ message: "Error deleting event", error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
