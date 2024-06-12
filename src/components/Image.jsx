import { Suspense } from "react";
import { useImage } from "react-image";

export default function MyImageComponent(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImageCompBase {...props} />
    </Suspense>
  );
}

const ImageCompBase = ({ src, ...props }) => {
  const { src: imgSrc, error } = useImage({
    srcList: src,
  });

  if (error) {
    console.log("Image not found", error);
    return null;
  }
  return (
    <img
      onError={() => {
        console.log("Image not found", error);
      }}
      src={imgSrc}
      {...props}
    />
  );
};
