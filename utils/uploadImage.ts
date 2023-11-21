import { PicGo } from "picgo";

const picgo = new PicGo();

export const allowExtname = ["png", "jpeg", "jpg", "webp"];
const regExt = /\.(\w+)$/;

export const uploadImage = async (images: string[]) => {
  if (!Array.isArray(images)) {
    throw new TypeError("images 必须为数组");
  }

  images.forEach((image) => {
    const ext = regExt.exec(image)?.[1] || "";
    if (!allowExtname.includes(ext)) {
      throw new Error(`图片后缀错误: ${image}`);
    }
  });

  if (images.length === 0) {
    return []
  }

  const res = await picgo.upload(images);
  if (Array.isArray(res)) {
    return res.map((item) => item.imgUrl);
  }

  throw res;
};
