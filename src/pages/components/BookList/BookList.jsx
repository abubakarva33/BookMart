import "./BookList.css";
import Row from "react-bootstrap/Row";
import BookEach from "../BookEach/BookEach";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterByGenra } from "../../../redux/features/BookSlice";

const BookList = () => {
  const dispatch =useDispatch()
  const {filteredBooks } = useSelector((state) => state.book);
  console.log(filteredBooks);
  useEffect(()=> {
    dispatch(filterByGenra())
  }, [])
  return (
    <div>
      <>
        <h3>Popular Books</h3>
        <Row xs={1} sm={2} md={2} lg={3} className="g-4 mt-1 mb-5">
          {filteredBooks?.length !=0 ? (
            filteredBooks?.map((book, idx) => <BookEach key={idx} book={book} />)
          ) : (
            <p> No book found with this criteria</p>
          )}
        </Row>
      </>
    </div>
  );
};

export default BookList;
