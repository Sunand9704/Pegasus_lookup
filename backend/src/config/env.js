const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const requiredEnvironmentKeys = ["PORT", "MONGODB_URI", "JWT_SECRET", "CORS_ORIGIN"];

const missingEnvironmentKeys = requiredEnvironmentKeys.filter((key) => !process.env[key]);

if (missingEnvironmentKeys.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missingEnvironmentKeys.join(", ")}`
  );
}

const parsedPort = Number(process.env.PORT);

if (!Number.isInteger(parsedPort) || parsedPort <= 0) {
  throw new Error("PORT must be a valid positive integer.");
}

const env = Object.freeze({
  nodeEnv: process.env.NODE_ENV || "development",
  port: parsedPort,
  mongodbUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  corsOrigin: process.env.CORS_ORIGIN,
  thirdPartyApiKey: process.env.THIRD_PARTY_API_KEY || "",
});

module.exports = { env };
