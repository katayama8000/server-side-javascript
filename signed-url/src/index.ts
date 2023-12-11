import { Storage } from '@google-cloud/storage';

const bucketName = 'example-bucket-katayama';
const objectName = 'giant.jpeg';
const expiresTime = 3 * 60 * 1000; // 3分をミリ秒に変換

async function generateSignedUrl() {
  const storage = new Storage();
  const bucket = storage.bucket(bucketName);

  const [signedUrl] = await bucket.file(objectName).getSignedUrl({
    version: 'v4',
    action: 'read',
    expires: Date.now() + expiresTime,
    promptSaveAs: objectName, // Optional: Set a suggested filename when the browser prompts to save the file.
  });

  return signedUrl;
}

// 使用例
generateSignedUrl()
  .then((signedUrl) => {
    console.log('Signed URL:', signedUrl);
  })
  .catch((err) => {
    console.error('Error generating signed URL:', err);
  });
