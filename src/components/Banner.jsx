import "./Banner.css";

function Banner({ title, backgroundImage }) {
  return (
    <section
      className="page-banner"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(
                rgba(0, 51, 102, 0.75),
                rgba(0, 51, 102, 0.75)
              ), url(${backgroundImage})`
            }
          : {}
      }
    >
      <h1>{title}</h1>
    </section>
  );
}

export default Banner;
