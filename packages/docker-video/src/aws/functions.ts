import fs from "fs";
import path from "path";
import s3 from "./client";
import { PutObjectCommand, PutObjectCommandInput } from "@aws-sdk/client-s3";
import { v4 as uuid } from "uuid";
import { AWS_BUCKET_NAME } from "../constants";

export async function uploadObject(pathToFile: string){
  if (!fs.existsSync(pathToFile)) {
    throw new Error(`File not found: ${pathToFile}`);
  }

  const fileStream = fs.createReadStream(pathToFile);
  const fileName = path.basename(pathToFile);
  const uniqueFileName = `${fileName}-${uuid()}`;

  const uploadParams: PutObjectCommandInput = {
    Bucket: AWS_BUCKET_NAME,
    Key: uniqueFileName,
    Body: fileStream,
  };

  const command = new PutObjectCommand(uploadParams);
  await s3.send(command);

  console.log(uploadParams.Key);
}
