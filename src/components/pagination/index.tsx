import ReactPaginate from "react-paginate";
import { useWindowSize } from "usehooks-ts";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

interface IProps {
  itemsPerPage: number;
  TotalCount: number;
  setCurrentPage: (_: number) => void;
  currentTotal: number;
  PageNumber: number;
  isLoading: boolean;
  showEntries: boolean;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginatedItems: React.FC<IProps> = ({
  itemsPerPage,
  TotalCount,
  setCurrentPage,
}) => {
  const { width } = useWindowSize();
  const pageCount = Math.ceil(TotalCount / itemsPerPage);

  const handlePageClick = (event: any) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setCurrentPage(event.selected + 1);
  };

  const isTab = width < 803;

  return (
    <div
      className={`flex items-center mt-8 justify-between text-[#52505E] bg-dark-200 ${
        isTab && "flex-col mt-8"
      } `}
      data-test="paginate"
    >
      <ReactPaginate
        breakLabel="..."
        nextLabel={<GrNext className="" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<GrPrevious className="" />}
        renderOnZeroPageCount={() => null}
        previousClassName="mr-2 flex items-center justify-center font-[800] text-[1rem] p-0"
        nextClassName="ml-2 flex items-center justify-center font-[800] text-[1rem] p-0"
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
};

export default PaginatedItems;
