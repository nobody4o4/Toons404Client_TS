function ComicImage({ image, index }: { image: string; index: number }) {
  return (
    <img
      className="pointer-events-none col-start-2 select-none"
      alt={`Page ${index + 1}`}
      height="1114"
      key={index}
      src={image}
      style={{
        objectFit: "cover",
      }}
      width="740"
    />
  );
}
export default ComicImage;
