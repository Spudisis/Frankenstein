import React from "react";
import ReactPaginate from "react-paginate";
import s from "./Styles.module.scss";
import { StylesPagination } from "./Paginate.styles";
export const Paginate = ({
  ShowMore,
  size,
  limit,
  statusLoading,
  page,
}: any) => {
  const [sizes, setSize] = React.useState(window.innerWidth);

  //добавить тротлиег
  const resizeHandler = (e: Event) => {
    setSize((e.currentTarget as Window).innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <StylesPagination load={statusLoading}>
      <ReactPaginate
        forcePage={page}
        onClick={statusLoading}
        breakLabel="..."
        nextLabel=">"
        onPageChange={ShowMore}
        pageRangeDisplayed={sizes > 500 ? 1 : 0}
        marginPagesDisplayed={sizes > 500 ? 2 : 0}
        pageCount={Math.ceil(size / limit)}
        previousLabel="<"
        renderOnZeroPageCount={null}
        disableInitialCallback={statusLoading}
        activeClassName={`${s.activeClassName}`}
      />
    </StylesPagination>
  );
};
