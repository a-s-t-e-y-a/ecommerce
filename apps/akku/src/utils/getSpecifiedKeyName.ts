export default function getFileKeys(uploadedFiles) {
  if (!Array.isArray(uploadedFiles)) {
    throw new Error("Input must be an array");
  }

  return uploadedFiles.map(file => process.env.BASE_URL_AWS_S3+file.key);
}
