import { useParams } from "react-router-dom";
import "./BookDetails.css";
import { useGetSelectedBookQuery } from "../../../redux/api";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Comment from "../Comment/Comment";

const BookDetails = () => {
  const { bookId } = useParams();
  const { data } = useGetSelectedBookQuery(bookId);
  if (!data) {
    return "loading";
  }
  const { authorName, picture, title, genra, registered, id } = data;
  return (
    <div className="my-5">
      <Card className="card">
        <Row className="card-height">
          <Col md={6} xs={12}>
            <Card.Img variant="top" src={picture} className="bookImg" />
          </Col>
          <Col md={6} xs={12} className="pe-5">
            <Card.Body className="card-height d-flex flex-column justify-content-evenly align-items-between">
              <div>
                <Card.Title>
                  {" "}
                  <h2> Book Title: {title}</h2>{" "}
                </Card.Title>
                <Card.Text>
                  <p>Author: {authorName}</p>
                  <p>Genra: {genra}</p>
                  <p> Publication Date: {registered}</p>
                </Card.Text>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <button className="border-0 rounded fs-5 py-2"> Add to Cart</button>
                <button className="border-0 rounded fs-5 py-2"> Read Later</button>
              </div>
            </Card.Body>
          </Col>
        </Row>
        <Comment/>
      </Card>
    </div>
  );
};

export default BookDetails;
