import ffmpeg from "fluent-ffmpeg";
import path from "path";
import fs from "fs";
import { OUTPUT_DIR } from "./constants";

const resolutions = [
  { resolution: "1920x1080", bitrate: "5000k" },
  { resolution: "1280x720", bitrate: "2500k" },
  { resolution: "854x480", bitrate: "1200k" },
  { resolution: "640x360", bitrate: "800k" },
  { resolution: "256x144", bitrate: "400k" },
];

export function transCodeVideo(
  inputPath: string,
): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const inputFileName = path.basename(inputPath);
    const outputFileName = inputFileName.split(".")[0];

    if (!fs.existsSync(inputPath)) {
      reject(new Error("Input file does not exist"));
    }

    const input = ffmpeg(inputPath);

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    } else {
      fs.rmSync(OUTPUT_DIR, { recursive: true });
      fs.mkdirSync(OUTPUT_DIR);
    }

    resolutions.forEach((item) => {
      input
        .output(`${OUTPUT_DIR}/${outputFileName}-${item.resolution}.mp4`)
        .videoCodec("libx264")
        .audioCodec("aac")
        .size(item.resolution)
        .videoBitrate(item.bitrate)
        .audioBitrate("128k")
        .on("end", () => {
          console.log(`Transcoding finished for ${item.resolution}`);
          resolve(
            resolutions.map(
              (resolution) =>
                `${OUTPUT_DIR}/${outputFileName}-${resolution.resolution}.mp4`
            )
          );
        })
        .on("error", (err) => {
          console.log("An error occurred: " + err.message);
          reject(err);
        })
        .run();
    });
  });
}
