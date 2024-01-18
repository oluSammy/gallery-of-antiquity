"use client";

import Book from "@/components/Book/Books";
import PageHeader from "@/components/PageHeader/PageHeader";
import SearchFilter from "@/components/SearchFilter/SearchFilter";
import PageLayout from "@/containers/PageLayout";

const page = () => {
  return (
    <PageLayout>
      <div className="container mx-auto my-20 ">
        <PageHeader title={"Books"} />

        <SearchFilter
          searchPlaceholder="Search Books"
          categories={[
            {
              active: true,
              label: "History",
              value: "north",
              onClick: () => {},
            },
            {
              label: "Culture",
              value: "north",
              onClick: () => {},
            },
            {
              label: "Nigeria States",
              value: "north",
              onClick: () => {},
            },
          ]}
          showFilter={false}
        />
        <div className="grid grid-cols-12 gap-x-4 mt-20">
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <Book imgSrc="/book-1.jpg" name="Nigeria" price={30000} />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <Book imgSrc="/book-2.jpg" name="Nigeria" price={30000} />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <Book imgSrc="/book-3.jpg" name="Nigeria" price={30000} />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <Book imgSrc="/book-1.jpg" name="Nigeria" price={30000} />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <Book imgSrc="/book-1.jpg" name="Nigeria" price={30000} />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <Book imgSrc="/book-1.jpg" name="Nigeria" price={30000} />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <Book imgSrc="/book-1.jpg" name="Nigeria" price={30000} />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <Book imgSrc="/book-1.jpg" name="Nigeria" price={30000} />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <Book imgSrc="/book-1.jpg" name="Nigeria" price={30000} />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <Book imgSrc="/book-1.jpg" name="Nigeria" price={30000} />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <Book imgSrc="/book-1.jpg" name="Nigeria" price={30000} />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <Book imgSrc="/book-1.jpg" name="Nigeria" price={30000} />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <Book imgSrc="/book-1.jpg" name="Nigeria" price={30000} />
          </div>
          <div className="col-span-full lg:col-span-4 xl:col-span-3 px-2 mb-4 lg:px-0">
            <Book imgSrc="/book-1.jpg" name="Nigeria" price={30000} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default page;
