interface Props {
  title: string;
  subtitle: string;
  align?: "center" | "left";
}

const DarkHero = (props: Props) => {
  return (
    <div
      className={`h-96 bg-[#231F20] w-full flex ${
        props.align === "left"
          ? "items-end p-14 "
          : "items-center justify-center"
      }  `}
    >
      <div>
        <h1 className="text-white font-medium text-3xl mb-4 lg:text-[60px]">
          {props.title}
        </h1>
        <h6 className="text-[#DBD8D8] font-normal text-xl text-center">
          {props.subtitle}
        </h6>
      </div>
    </div>
  );
};

export default DarkHero;
