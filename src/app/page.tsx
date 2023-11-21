import GalleryPicture from "@/components/GalleryPicture/GalleryPicture";
import Hero from "@/components/Hero/Hero";
import PageLayout from "@/containers/PageLayout";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import Product from "@/components/Product/Product";
import StatesPicture from "@/components/StatesPicture/StatesPicture";

export default function Home() {
  return (
    <PageLayout>
      <Hero />

      {/* photograph highlight section */}
      <section className="py-10 mt-8">
        <p className="uppercase text-center text-[#FA0303] text-sm font-bold">
          Our Gallery
        </p>
        <p className="capitalize text-center text-[#1B2336] font-semibold text-[42px] leading-[50px]">
          Some Photograph <br /> highlights in the centre
        </p>

        <div className="container mx-auto mt-8">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-full lg:col-span-4 px-2 lg:px-0">
              <GalleryPicture
                category="Environment"
                imgSrc="/1.png"
                name="Nature View"
                numberInStock={23}
              />
            </div>
            <div className="col-span-full lg:col-span-4 px-2 lg:px-0">
              <GalleryPicture
                category="Environment"
                imgSrc="/2.png"
                name="Nature View"
                numberInStock={23}
              />
            </div>
            <div className="col-span-full lg:col-span-4 px-2 lg:px-0">
              <GalleryPicture
                category="Environment"
                imgSrc="/3.png"
                name="Nature View"
                numberInStock={23}
              />
            </div>
          </div>

          <Link
            href="/gallery"
            className="text-[#FF4250] underline flex items-center justify-center mt-6"
          >
            {" "}
            <span>See More</span>
            <span className="inline ml-1">
              <IoIosArrowForward />
            </span>
          </Link>
        </div>
      </section>

      {/* Visit the museum section */}
      <section className="bg-[#F6F6F6] py-12 ">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12">
            <figure className="col-span-full lg:col-span-6">
              <Image
                src="/musuem-01.jpg"
                width={1000}
                height={1000}
                alt="visit the musuem"
                className="w-full h-full object-cover rounded-lg"
              />
            </figure>
            <div className="col-span-full lg:col-span-6 lg:mt-0 mt-8 ">
              <p className="text-center text-[#171717] font-semibold text-5xl opacity-60 mb-4 ">
                Visit the museum
              </p>
              <div className="bg-white px-8 ">
                <div className="flex justify-center items-center py-6 font-normal sans border-b">
                  <div className="bg-[#FCC1C1] h-5 w-5 rounded-full flex items-center justify-center mr-2">
                    <div className="bg-[#FA0303] h-3 w-3 rounded-full">
                      &nbsp;
                    </div>
                  </div>
                  <span className="text-[#F47171] mr-2">
                    Center opens today from{" "}
                  </span>
                  <span className="text-[#2C2B2B] font-bold">
                    10:00 AM to 10:00PM
                  </span>
                </div>
                <div className="flex text-2xl  sans px-10">
                  <div className=" border-b w-full text-center py-6">
                    <p className="text-[#383838] font-bold">
                      10:00 AM &#x2192; 10:00PM
                    </p>
                    <p className="text-[#696161] font-light text-base">
                      Monday - Sunday
                    </p>
                  </div>
                </div>
                <div className="flex text-2xl  sans px-10">
                  <div className=" border-b w-full text-center py-6">
                    <p className="text-[#383838] font-bold">8:00PM</p>
                    <p className="text-[#696161] font-light text-base">
                      Last Entry
                    </p>
                  </div>
                </div>
                <div className="flex text-2xl  sans px-10">
                  <div className=" border-b w-full text-center py-6">
                    <p className="text-[#383838] font-bold">2 Hours</p>
                    <p className="text-[#696161] font-light text-base">
                      Duration
                    </p>
                  </div>
                </div>
                <div className="text-center px-10 py-4">
                  <p className="text-[#FC6565]">Public Holidays:</p>
                  <p className="text-[15px] text-[#5B5656] font-light">
                    It remains open on all other public holidays except
                    otherwise which should be communicated here.
                  </p>
                </div>
                <div className="flex justify-center pb-4">
                  <button className="btn bg-[#EB0B0B] text-xl font-bold px-8 py-4 mt-3 text-white flex items-center rounded-full ">
                    Plan Your Visit
                    <span className="ml-2">
                      <IoIosArrowRoundForward />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Products */}
      <section className="my-6">
        <div className="container mx-auto">
          <div className="flex mb-8 justify-between items-center px-4">
            <h2 className="text-[#363636] font-semibold text-4xl relative border-w py-2 ">
              Explore Our Products
            </h2>
            <Link
              href="/gallery"
              className="text-[#FF4250] underline flex items-center justify-center"
            >
              <span>See More</span>
              <span className="inline ml-1">
                <IoIosArrowForward />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-12 items-stretch auto-rows-fr">
            <div className="col-span-full lg:col-span-4 mb-3 lg:mb-0 px-2 lg:px-0">
              <Product imgSrc="/2.png" name="Pictures" numberInStock={5000} />
            </div>
            <div className="col-span-full lg:col-span-4 mb-3 lg:mb-0 px-2 lg:px-0">
              <Product
                imgSrc="/fela.png"
                name="Nigeria Souvenirs"
                numberInStock={5000}
              />
            </div>
            <div className="col-span-full lg:col-span-4 mb-3 lg:mb-0 px-2 lg:px-0">
              <Product imgSrc="/books.jpg" name="Books" numberInStock={5000} />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="my-8">
        <div className="container mx-auto">
          <div className="flex mb-8 justify-between items-center px-4">
            <h2 className="text-[#363636] font-semibold text-4xl relative border-w py-2 ">
              History of the states
            </h2>
            <Link
              href="/gallery"
              className="text-[#FF4250] underline flex items-center justify-center"
            >
              <span>See More</span>
              <span className="inline ml-1">
                <IoIosArrowForward />
              </span>
            </Link>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-x-6">
            <div className=" col-span-full lg:col-span-3 mb-10 lg:mb-0 px-2 lg:px-0">
              <StatesPicture
                imgSrc="/lagos.png"
                name="Abuja"
                text="FCT, is a federal territory in the central Nigeria.  Abuja, is the capital city of Nigeria, and is located in this.."
              />
            </div>
            <div className=" col-span-full lg:col-span-3 mb-10 lg:mb-0 px-2 lg:px-0">
              <StatesPicture
                imgSrc="/oyo.png"
                name="Oyo"
                text="Yobe is a state located in northeastern Nigeria. A mainly agricultural state, it was created on 27 August 1991.."
              />
            </div>
            <div className=" col-span-full lg:col-span-3 mb-10 lg:mb-0 px-2 lg:px-0">
              <StatesPicture
                imgSrc="/yobe.png"
                name="Lagos"
                text="FCT, is a federal territory in the central Nigeria.  Abuja, is the capital city of Nigeria, and is located in this.."
              />
            </div>
            <div className=" col-span-full lg:col-span-3 mb-10 lg:mb-0 px-2 lg:px-0">
              <StatesPicture
                imgSrc="/kaduna.png"
                name="Kaduna"
                text="FCT, is a federal territory in the central Nigeria.  Abuja, is the capital city of Nigeria, and is located in this.."
              />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
