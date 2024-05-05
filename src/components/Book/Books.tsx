import Image from "next/image";
import "../Product/product.css";
import { formatNumber } from "@/utils/formatnumber";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Link from "next/link";

interface Props {
  imgSrc: string;
  name: string;
  price: number;
  priceRange: [number, number];
  link: string;
}

const Book = (props: Props) => {
  const isNotPriceAge = props.priceRange[0] && props.priceRange[1];

  return (
    <Link
      href={props.link}
      className="relative lg:w-fit w-full group cursor-pointer overflow-hidden"
    >
      <figure className="w-full h-80 bg-image">
        <Image
          src={props.imgSrc}
          alt={props.name}
          width={400}
          height={400}
          className="max-lg:w-full h-full object-cover"
        />
      </figure>
      <div className="product-overlay"></div>
      <div className="absolute bottom-2 left-4">
        <p className="font-bold text-xl text-white">{props.name}</p>
        <p className="font-normal sans text-sm text-[#DADADA]">
          {isNotPriceAge ? (
            <>
              &#x20A6; {formatNumber(props.priceRange[0])} - &#x20A6;
              {formatNumber(props.priceRange[1])}
            </>
          ) : (
            <>&#x20A6; {formatNumber(props.price)}</>
          )}
        </p>
      </div>
      <button className="bg-white px-6 py-2 rounded-full absolute invisible -top-20 right-2 group-hover:visible group-hover:top-2 flex items-center ">
        <span className="mr-1">
          <HiOutlineShoppingBag className="" color="red" />
        </span>
        Add to cart
      </button>
    </Link>
  );
};

export default Book;
