import dotenv from "dotenv";
dotenv.config();

export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || "";
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || "";
export const AWS_REGION = process.env.AWS_REGION || "us-east-1";
export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME || "video-bucket";

export const VIDEO_FILE_PATH = process.env.VIDEO_FILE_PATH || "video.mp4";
