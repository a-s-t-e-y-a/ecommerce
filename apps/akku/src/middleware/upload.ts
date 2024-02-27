import  {  Response, NextFunction } from 'express';
import multer from 'multer';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { Authenticate } from '../interfaces/reqInterface';
import { responseError } from '../utils/responseError';
import { CustomError } from '../utils/errorThrow';

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
});

// Configure multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Function to handle file upload to S3
export default function uploadToS3(req: Authenticate, res: Response, next: NextFunction) {
  upload.single('file')(req, res, async (err: any) => {
    try {
    if (err) {
      throw new CustomError('Error happend ', 'Error ouccred', 404);
    }

    if (!req.file) {
      throw new CustomError('File didnt uploaded', 'File not found', 404)
      }

    const file = req.file;

    // Upload file to S3
    const params: AWS.S3.PutObjectRequest = {
      Bucket: process.env.BUCKET_NAME,
      Key: `${uuidv4()}-${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: 'public-read', // Adjust the ACL as needed
    };


      const uploadResult = await s3.upload(params).promise();
      req.fileUrl = uploadResult.Location;
      next();
    } catch (error) {
      console.error('Error uploading file:', error);
      responseError(res, error)
    }
  });
}
