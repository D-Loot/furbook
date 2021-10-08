// TODO: Import the models
import client from "./client.js";

client
  .connect()
  .then(() => {
    // TODO: Seed your database here!
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  })
  .finally(() => {
    console.log("🗃️ 🌱");
    client.close();
  });
