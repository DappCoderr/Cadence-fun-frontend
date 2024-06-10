import { useImage } from "react-image";

export default function MyImageComponent({ src, ...props }) {
  const { src: imgSrc } = useImage({
    srcList: src,
  });

  return <img src={imgSrc} {...props} />;
}
