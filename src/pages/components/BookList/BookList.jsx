import "./BookList.css";
import Row from "react-bootstrap/Row";
import BookEach from "../BookEach/BookEach";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { filterByGenra, setBooks } from "../../../redux/features/BookSlice";
import { Pagination } from "antd";
import { useGetBooksQuery } from "../../../redux/api";

const BookList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => setTotal(data.length));
  }, []);

  const { filteredBooks } = useSelector((state) => state.book);
  const { data } = useGetBooksQuery({ page, limit });

  useEffect(() => {
    dispatch(setBooks(data));
  }, [data]);

  useEffect(() => {
    dispatch(filterByGenra());
  }, []);
  let pageNumber = Math.ceil(filteredBooks?.length / 2);

  const onShowSizeChange = (page, limit) => {
    console.log({ page, limit });
    setPage(page);
    setLimit(limit);
  };
  return (
    <div>
      <>
        <h3>Popular Books</h3>
        <Row xs={1} sm={2} md={2} lg={3} className="g-4 mt-1 mb-5">
          {filteredBooks?.length != 0 ? (
            filteredBooks?.map((book, idx) => <BookEach key={idx} book={book} />)
          ) : (
            <p> No book found with this criteria</p>
          )}

          {filteredBooks?.length >= 5 ? (
            <div>
              {Array.from({ length: pageNumber }, (_, index) => index + 1).map((page) => (
                <p key={page}> page {page}</p>
              ))}
            </div>
          ) : null}
        </Row>
        <Pagination
          showSizeChanger
          onChange={onShowSizeChange}
          defaultCurrent={1}
          defaultPageSize={2}
          total={total}
        />
      </>
    </div>
  );
};

export default BookList;
