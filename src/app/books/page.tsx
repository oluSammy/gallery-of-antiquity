import Book from "@/components/Book/Books";
import SearchFilter from "@/components/SearchFilter/SearchFilter";
import PageLayout from "@/containers/PageLayout";

const page = () => {
  return (
    <PageLayout>
      <div className="container mx-auto my-20 ">
        <h1 className="mb-6 text-[#363636] font-semibold text-4xl pb-5 border-b border-[#E5E4E4]">
          Books
        </h1>

        <SearchFilter />
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
