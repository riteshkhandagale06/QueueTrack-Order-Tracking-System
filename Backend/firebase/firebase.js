import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync, existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let serviceAccount;

// Production (Render)
if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
}
// Local Development
else {
  const keyPath = path.join(__dirname, "serviceAccountKey.json");

  if (!existsSync(keyPath)) {
    throw new Error("Firebase serviceAccountKey.json not found.");
  }

  serviceAccount = JSON.parse(
    readFileSync(keyPath, "utf8")
  );
}

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

const db = getFirestore();

export { db };