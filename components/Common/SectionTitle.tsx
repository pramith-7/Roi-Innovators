const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "10px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mbtext-3xl font-bold !leading-tight text-white text-3xl md:text-[45px]">
          {title}
        </h2>
        <p className="!leading-relaxed text-body-color md:text-lg text-sm">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
