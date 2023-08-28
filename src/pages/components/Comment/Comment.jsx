import TextArea from "antd/es/input/TextArea";
import "./Comment.css";
import { Button, Form } from "antd";
import { Col, Row } from "react-bootstrap";

const Comment = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="my-4 mx-2"
    >
      <h5 className="mb-3"> Whats your opinion ? Leave a comment here. </h5>
      <Row className="d-flex  align-items-center">
        <Col md={9}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please leave your comment here !",
              },
            ]}
          >
            <TextArea
              placeholder="Leave your comment here..."
              autoSize={{ minRows: 2, maxRows: 6 }}
            />
          </Form.Item>
        </Col>
        <Col md={3}>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-100 fs-5 p-4 d-flex  align-items-center justify-content-center">
              <span>Comment</span>
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default Comment;
