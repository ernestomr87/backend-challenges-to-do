const express = require("express");
const { doubleCsrf } = require("csrf-csrf");

const routes = require("./routes");
const { initDB } = require("./db");

const { generateToken, doubleCsrfProtection } = doubleCsrf({
  getSecret: () => process.env.CSRF_SECRET,
  secret: process.env.CSRF_SECRET,
  cookieName: "__Host-psifi.x-csrf-token",
  cookieOptions: {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: true,
  },
});

const app = express();
const port = 3000;

// Middleware básico
app.use(express.json());

// Ruta de bienvenida (sin protección CSRF)
app.get("/", (_, res) => {
  res.send("Contact form API is running!");
});

// Endpoint para obtener token CSRF (sin protección CSRF)
app.get("/csrf-token", (req, res) => {
  res.json({ token: generateToken(req) });
});

// Aplicar protección CSRF a todas las rutas siguientes
// app.use(doubleCsrfProtection);

// Rutas protegidas por CSRF
app.use("/", routes);

// Middleware de manejo de errores (debe ir al final)
app.use((err, _, res, next) => {
  if (err && err.type === "doubleCsrfError") {
    return res.status(403).json({ message: "Invalid CSRF token" });
  }
  next();
});

// Solo iniciar el servidor si no estamos en modo test
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    initDB();
    console.log(`Server running on http://localhost:${port}`);
  });
}

// Exportar la app para testing
module.exports = app;
