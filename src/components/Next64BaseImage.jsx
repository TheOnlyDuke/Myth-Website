import Image from "next/image";
const NextBase64Image = ({ base64String, alt, width, height, ...props }) => {
  const src = `data:image/png;base64,${base64String}`;

  return (
    <Image
      src={src}
      alt={alt || 'Base64 encoded image'}
      width={width}
      height={height}
      {...props}
    />
  );
};

export default NextBase64Image;