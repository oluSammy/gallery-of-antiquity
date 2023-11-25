import GalleryPicture from "@/components/GalleryPicture/GalleryPicture";
import SearchFilter from "@/components/SearchFilter/SearchFilter";
import PageLayout from "@/containers/PageLayout";
import React from "react";

const page = () => {
  return (
    <PageLayout>
      <div className="container mx-auto my-20 ">
        <h1 className="mb-6 text-[#363636] font-semibold text-4xl pb-5 border-b border-[#E5E4E4]">
          {" "}
          Pictures{" "}
        </h1>

        <SearchFilter />
        <div className="grid grid-cols-12 gap-x-4 mt-20">
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <GalleryPicture
              category="Environment"
              imgSrc="/1.png"
              name="Nature View"
              numberInStock={23}
              price={8900}
            />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <GalleryPicture
              category="Environment"
              imgSrc="/2.png"
              name="Nature View"
              numberInStock={23}
              price={8900}
            />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <GalleryPicture
              category="Environment"
              imgSrc="/3.png"
              name="Nature View"
              numberInStock={23}
              price={8900}
            />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <GalleryPicture
              category="Environment"
              imgSrc="/1.png"
              name="Nature View"
              numberInStock={23}
              price={8900}
            />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <GalleryPicture
              category="Environment"
              imgSrc="/2.png"
              name="Nature View"
              numberInStock={23}
              price={8900}
            />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <GalleryPicture
              category="Environment"
              imgSrc="/1.png"
              name="Nature View"
              numberInStock={23}
              price={8900}
            />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <GalleryPicture
              category="Environment"
              imgSrc="/2.png"
              name="Nature View"
              numberInStock={23}
              price={8900}
            />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <GalleryPicture
              category="Environment"
              imgSrc="/1.png"
              name="Nature View"
              numberInStock={23}
              price={8900}
            />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <GalleryPicture
              category="Environment"
              imgSrc="/2.png"
              name="Nature View"
              numberInStock={23}
              price={8900}
            />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <GalleryPicture
              category="Environment"
              imgSrc="/1.png"
              name="Nature View"
              numberInStock={23}
              price={8900}
            />
          </div>
          <div className="col-span-full lg:col-span-4 px-2 mb-4 lg:px-0 xl:col-span-3">
            <GalleryPicture
              category="Environment"
              imgSrc="/2.png"
              name="Nature View"
              numberInStock={23}
              price={8900}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default page;
