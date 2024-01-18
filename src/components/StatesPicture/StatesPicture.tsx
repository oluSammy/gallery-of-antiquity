import Image from "next/image";

interface Props {
  imgSrc: string;
  name: string;
  text: string;
}

const StatesPicture = (props: Props) => {
  return (
    <div className="relative lg:w-fit w-full mt-8">
      <figure className="w-full h-52 ">
        <Image
          src={props.imgSrc}
          alt={props.name}
          width={400}
          height={400}
          className="max-lg:w-full h-full object-cover"
        />
      </figure>
      <div className="">
        <p className="font-semibold text-2xl text-[#363636]">{props.name}</p>
        <p className="sans text-base text-[#AEB0B4]">{props.text}</p>
      </div>
    </div>
  );
};

export default StatesPicture;
