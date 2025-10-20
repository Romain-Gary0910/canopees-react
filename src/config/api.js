// src/config/api.js

// Récupère automatiquement l’URL de l’API selon l’environnement (dev ou prod)
export const API_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
  