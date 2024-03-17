import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
import { Authenticate } from '../interfaces/reqInterface';
import path from "path";

const s3Config = new S3Client({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  },
});


// Middleware for array file upload
const arrayUpload = multer({
  storage: multerS3({
    s3: s3Config,
    bucket: process.env.BUCKET_NAME,
    region: process.env.REGION,
    acl: "public-read",
    contentType: (req, file, cb) => {
      cb(null, file.mimetype);
    },
    metadata: (req, file, cb) => {
      cb(null, { 'Content-Type': file.mimetype });
    },
    key: (req, file, cb) => {   
        const fileName = `${Date.now()}_${Math.round(Math.random() * 1E9)}`;
        cb(null, `${fileName}${path.extname(file.originalname)}`);
    }
  }),
})// 'files' is the field name for array file upload

export default arrayUpload ;
