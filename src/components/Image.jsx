import { useImage } from "react-image";

export default function MyImageComponent({ src, ...props }) {
  const { src: imgSrc, error } = useImage({
    srcList: src,
  });

  if (error) {
    console.log("Image not found", error);
    return null;
  }
  return <img src={imgSrc} {...props} />;
}
