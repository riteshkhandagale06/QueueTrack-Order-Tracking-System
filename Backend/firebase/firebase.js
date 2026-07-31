import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read Firebase Service Account
const serviceAccount = JSON.parse(
  readFileSync(path.join(__dirname, "serviceAccountKey.json"), "utf8")
);

// Initialize Firebase only once
if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

// Firestore Database
const db = getFirestore();

// Export Firestore
export { db };