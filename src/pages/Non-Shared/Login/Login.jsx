import "./Login.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="userForm">
      <Row>
        <Col xs={12} md={8}></Col>
        <Col xs={12} md={4}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h3>Hello Again!</h3>
                <p>Please Log in!!</p>
            </div>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <h6>Email</h6>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <div className="d-flex align-items-center justify-content-between">
                <h6>Password</h6>
                <Link to="/" className="login-form-forgot">
                  <h6>Forgot password?</h6>
                </Link>
              </div>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <div className="btnGroups">
                <Button type="primary" htmlType="submit" className="login-form-button mb-3 w-100">
                  Log in
                </Button>
                <div className="d-flex">
                  <hr />
                  <p className="loginWith">Login With</p>
                  <hr />
                </div>
                <div className="d-flex w-100">
                  <Button type="primary" className="login-form-button mb-3 me-3 w-100">
                    Google
                  </Button>
                  <Button type="primary" className="login-form-button mb-3 w-100">
                    Facebook
                  </Button>
                </div>
                <p>
                  Don't have an account? <Link to="/register">Register now!</Link>
                </p>
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
