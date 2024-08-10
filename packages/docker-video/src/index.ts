import { uploadObject } from "./aws/functions";
import { VIDEO_FILE_PATH } from "./constants";

(async () => {
  uploadObject(VIDEO_FILE_PATH);
})();
