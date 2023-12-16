import PageLayout from "@/containers/PageLayout";
import Image from "next/image";
import "../../styles/overlay.css";
import { formatNumber } from "@/utils/formatnumber";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const groups = [
  {
    title: "5 Adults",
    price: 15000,
    link: "adults",
    number: "5",
  },
  {
    title: "8 Adults",
    price: 25000,
    link: "adults",
    number: "8",
  },
  {
    title: "10 Adults",
    price: 45000,
    link: "adults",
    number: "10",
  },
];

const page = () => {
  return (
    <PageLayout>
      <div className="relative mb-20">
        <figure className="w-full h-[45vh] bg-red-50">
          <Image
            src="/group-image.jpg"
            width={400}
            height={200}
            alt="Dap Group Ticket"
            className="w-full h-full object-cover"
          />
        </figure>
        <h1 className="text-center text-white absolute top-1/2 left-1/2 z-50 font-medium text-6xl -translate-y-1/2 -translate-x-1/2">
          Group Visit
        </h1>
        <div className="overlay"></div>
      </div>

      <section className="my-10">
        <div className="container mx-auto">
          <h2 className="text-black font-semibold text-3xl ">Group Packages</h2>
          <p className="font-light sans text-left mt-4 text-[#4C5760] ">
            All groups are welcome to our Centre to tour beautiful aspects of
            the nations finest. We have discounted prices for group tickets on
            here. Choose your packages enjoy discounted prices on your bookings.
          </p>
        </div>
      </section>

      <div className="container mx-auto my-10">
        {groups.map((group) => (
          <div key={group.title} className="my-14">
            <h4 className="text-[#1F1E1E] font-normal text-4xl mb-2">
              Group of {group.title}
            </h4>
            <p className="mb-2 text-[#635B5B] font-normal text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim
              distinctio doloribus, tempora deserunt officia quisquam. Quidem
              adipisci, odio sed pariatur fuga veniam. Iure fugiat voluptatem
              consequatur iusto non excepturi est. Nam ipsum error ea tempora
              minima? Nostrum possimus ut animi autem eos earum beatae dolorum
              molestiae inventore. Repellat nobi
            </p>
            <div className="flex items-center justify-between">
              <p className="text-black font-semibold text-4xl">
                &#x20A6; {formatNumber(group.price)}
              </p>
              <Link
                href={`/book-ticket?type=${group.link}&number=${group.number}&isDefault=true&price=${group.price}`}
                className="bg-[#F31F2E] text-white rounded-full px-5 cursor-pointer font-semibold text-xs py-3 flex items-center "
              >
                <span className="mr-2">Book Ticket</span>
                <span className="flex h-4 w-4 rounded-full border items-center justify-center">
                  <IoIosArrowRoundForward className="" />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default page;
