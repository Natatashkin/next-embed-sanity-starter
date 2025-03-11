import { SanityImageType } from "@/app/utils/types";
import { urlForSanity } from "@/sanity/utils/urlForSanity";
import Image from "next/image";

type Props = {
  src: SanityImageType;
  alt: string | null;
  quality?: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
};
const SanityImage = ({
  src,
  alt,
  quality = 85,
  priority = false,
  fill = false,
  sizes = "(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw",
  width,
  height,
}: Props) => {
  if (!src?.asset?._ref) return null;
  let imgSizes;
  let imgWidth;
  let imgHeight;

  if (!width || !height) {
    imgSizes = src.asset._ref.split("-").find((el) => el.includes("x"));
  }

  const segments = imgSizes?.split("x");
  if (segments) {
    imgWidth = Number(segments[0]);
    imgHeight = Number(segments[1]);
  }

  const defaultWidth = 300;
  const defaultHeight = 200;

  const srcImg = urlForSanity(src)
    .width(width ?? imgWidth ?? defaultWidth)
    .height(height ?? imgHeight ?? defaultHeight)
    .quality(quality)
    .url();

  return (
    <Image
      src={srcImg}
      alt={alt || "Sanity Image"}
      width={imgWidth}
      height={imgWidth}
      priority={priority}
      sizes={sizes}
      fill={fill}
    />
  );
};

export default SanityImage;
