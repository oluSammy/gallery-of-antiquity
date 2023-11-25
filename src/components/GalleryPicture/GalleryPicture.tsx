import { formatNumber } from "@/utils/formatnumber";
import Image from "next/image";

interface Props {
  imgSrc: string;
  name: string;
  category: string;
  numberInStock: number;
  price?: number;
}

const GalleryPicture = (props: Props) => {
  return (
    <div className="relative lg:w-fit w-full overflow-hidden group cursor-pointer">
      <Image
        src={props.imgSrc}
        alt={props.name}
        width={400}
        height={400}
        className="max-lg:w-full"
      />
      <div className="absolute bottom-2 left-4">
        <p className="font-bold text-xl text-white">{props.name}</p>
        <p className="font-normal sans text-sm text-[#DADADA]">
          {props.category} ({props.numberInStock})
        </p>
      </div>
      {props.price && (
        <div className="absolute -bottom-28 group-hover:bottom-2 right-3 sans bg-white rounded-full py-3 px-6">
          From &#x20A6; {formatNumber(props.price)}
        </div>
      )}
    </div>
  );
};

export default GalleryPicture;
