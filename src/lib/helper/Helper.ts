import { CLOUDINARY_CONFIG } from "../../config/Index";

export async function uploadToCloudinary(content: string): Promise<string> {
  const { url, upload_preset } = CLOUDINARY_CONFIG;
  return new Promise(async (res, rej) => {
    const base64Img = content;
    const data = {
      file: base64Img,
      upload_preset: upload_preset,
    };
    fetch(url, {
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(async (d) => {
        const data = await d.json();
        res(data.url);
      })
      .catch((e) => rej(e));
  });
}
