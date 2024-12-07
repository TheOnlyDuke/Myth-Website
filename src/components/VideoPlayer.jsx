export default function VideoPlayer({ title, src }) {
  return (
    <iframe
      src={src}
      style={{ width: "100%", height: "100%", border: "none" }}
      allowFullScreen
      title={title}
    ></iframe>
  );
}
