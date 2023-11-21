import Image from "next/image";
import "./product.css";

interface Props {
  imgSrc: string;
  name: string;
  numberInStock: number;
  price?: number;
}

const Product = (props: Props) => {
  return (
    <div className="relative lg:w-fit w-full ">
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
          {props.numberInStock}
        </p>
      </div>
    </div>
  );
};

// <img src="img_avatar.png" alt="Avatar" className="image">
// <div className="relative lg:w-fit w-full bg-image">
//   <figure className="w-full h-80 bg-image">
//     <Image
//       src={props.imgSrc}
//       alt={props.name}
//       width={400}
//       height={400}
//       className="max-lg:w-full h-full object-cover"
//     />
//   </figure>
//   <div className="absolute bottom-2 left-4">
//     <p className="font-bold text-xl text-white">{props.name}</p>
//     <p className="font-normal sans text-sm text-[#DADADA]">
//       {props.numberInStock}
//     </p>
//   </div>
// </div>

export default Product;
