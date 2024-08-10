import { uploadObject } from "./aws/functions";
import { VIDEO_FILE_PATH } from "./constants";
import { transCodeVideo } from "./ffmpeg";
import fs from "fs";
import { v4 as uuid } from "uuid";

(async () => {
  const id = uuid();
  console.log("Transcoding started");
  const videos = await transCodeVideo(VIDEO_FILE_PATH);
  console.log("Transcoding finished");
  videos.forEach(async (video) => {
    console.log(`Uploading ${video}`);
    await uploadObject(id, video);
    console.log(`Uploaded ${video}`);
    fs.unlinkSync(video);
  });
})();
