import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3';
interface DeleteObjectInput {
  Bucket: string;
  Key: string;
}
const s3Client = new S3Client({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  },
});
export default async function deleteS3Object(params: DeleteObjectInput): Promise<void> {
  // Configure AWS credentials (replace with your actual credentials)

  try {
   await s3Client.send(new DeleteObjectCommand(params));
    console.log('Successfully deleted object:', params);
  } catch (err) {
    console.error(err, err.stack);
    throw err; // Re-throw the error for further handling
  }
}
