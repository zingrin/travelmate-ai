import express from "express";
import cors from "cors";
import {
  faqs,
  packages,
  searchIndex,
  trips,
  blogPosts,
  users,
  bookings,
  contacts,
} from "./data.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const getUserFromAuth = (req) => {
  const authHeader = req.headers.authorization || req.headers["x-auth-token"];
  if (!authHeader) return null;

  const token = String(authHeader).replace(/Bearer\s+/i, "").trim();
  const [email, role] = token.split("|");
  return users.find((user) => user.email === email && user.role === role) || null;
};

const sanitizeUser = (user) => ({
  id: user.id,
  fullName: user.fullName,
  email: user.email,
  role: user.role,
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "travelmate-ai-backend" });
});

app.get("/api/faqs", (req, res) => {
  res.json({ faqs });
});

app.get("/api/packages", (req, res) => {
  res.json({ packages });
});

app.get("/api/package/:id", (req, res) => {
  const packageId = req.params.id;
  const pkg = packages.find((item) => item.id === packageId);
  if (!pkg) {
    return res.status(404).json({ error: "Package not found" });
  }

  res.json({ package: pkg });
});

app.get("/api/trips", (req, res) => {
  res.json({ trips });
});

app.get("/api/trips/:id", (req, res) => {
  const tripId = Number(req.params.id);
  const trip = trips.find((item) => item.id === tripId);
  if (!trip) {
    return res.status(404).json({ error: "Trip not found" });
  }
  res.json({ trip });
});

app.get("/api/blog", (req, res) => {
  res.json({ blogPosts });
});

app.get("/api/blog/:id", (req, res) => {
  const blogId = String(req.params.id);
  const post = blogPosts.find((item) => item.id === blogId || item.id === Number(blogId));
  if (!post) {
    return res.status(404).json({ error: "Blog post not found" });
  }
  res.json({ post });
});

app.get("/api/search", (req, res) => {
  const q = String(req.query.q || "").trim().toLowerCase();
  if (!q) {
    return res.status(400).json({ error: "Missing query parameter q" });
  }

  const results = searchIndex.filter((item) => {
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  });

  res.json({ query: q, results: results.slice(0, 5) });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email, and message are required" });
  }

  contacts.push({ id: `contact-${contacts.length + 1}`, name, email, message, createdAt: new Date().toISOString() });

  res.json({
    success: true,
    message: "Thanks for reaching out! Our travel team will respond within 24 hours.",
  });
});

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const user = users.find((item) => item.email === email && item.password === password);
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = `${user.email}|${user.role}`;
  res.json({ user: sanitizeUser(user), token });
});

app.post("/api/auth/register", (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res.status(400).json({ error: "Full name, email, and password are required" });
  }

  if (users.some((item) => item.email === email)) {
    return res.status(409).json({ error: "User already exists" });
  }

  const newUser = {
    id: `user-${users.length + 1}`,
    fullName,
    email,
    password,
    role: "user",
  };

  users.push(newUser);
  const token = `${newUser.email}|${newUser.role}`;

  res.status(201).json({ user: sanitizeUser(newUser), token });
});

app.get("/api/auth/me", (req, res) => {
  const user = getUserFromAuth(req);
  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  res.json({ user: sanitizeUser(user) });
});

app.get("/api/bookings", (req, res) => {
  const currentUser = getUserFromAuth(req);
  if (!currentUser) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const userId = req.query.userId ? String(req.query.userId) : currentUser.id;
  if (currentUser.role !== "admin" && userId !== currentUser.id) {
    return res.status(403).json({ error: "Forbidden" });
  }

  const userBookings = bookings.filter((booking) => booking.userId === userId);
  res.json({ bookings: userBookings });
});

app.post("/api/bookings", (req, res) => {
  const currentUser = getUserFromAuth(req);
  if (!currentUser) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { packageId, date } = req.body;
  if (!packageId || !date) {
    return res.status(400).json({ error: "packageId and date are required" });
  }

  const pkg = packages.find((item) => item.id === packageId);
  if (!pkg) {
    return res.status(404).json({ error: "Package not found" });
  }

  const newBooking = {
    id: `booking-${bookings.length + 1}`,
    userId: currentUser.id,
    packageId,
    status: "Pending",
    date,
    total: pkg.price,
  };

  bookings.push(newBooking);
  res.status(201).json({ booking: newBooking });
});

app.get("/api/admin/users", (req, res) => {
  const currentUser = getUserFromAuth(req);
  if (!currentUser || currentUser.role !== "admin") {
    return res.status(403).json({ error: "Admin access required" });
  }

  res.json({ users: users.map(sanitizeUser) });
});

app.get("/api/admin/bookings", (req, res) => {
  const currentUser = getUserFromAuth(req);
  if (!currentUser || currentUser.role !== "admin") {
    return res.status(403).json({ error: "Admin access required" });
  }

  res.json({ bookings });
});

app.listen(PORT, () => {
  console.log(`TravelMate AI backend running on http://localhost:${PORT}`);
});
