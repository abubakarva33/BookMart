import "./Register.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Register = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", { values });
  };
  return (
    <div>
      <Row className="userForm">
        <Col xs={12} md={8} className="login-left">
          <h1>WELCOME TO BOOK MART</h1>
          <p>Sign in to continue access</p>
        </Col>
        <Col xs={12} md={4}>
          <Form
            name="normal_login"
            className="login-form"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h3>Sign Up</h3>
            </div>
            <div>
              <h6>Full Name</h6>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  type="name"
                  placeholder="Email"
                />
              </Form.Item>
            </div>
            <div>
              <h6>Email</h6>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  type="email"
                  placeholder="Email"
                />
              </Form.Item>
            </div>
            <div>
              <h6>Password</h6>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
            </div>
            <div>
              <h6>Re-Password</h6>
              <Form.Item
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please re-input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
            </div>
            <div className="btnGroups">
              <Button type="primary" htmlType="submit" className="login-form-button mb-3 w-100">
                Register
              </Button>
              <div className="d-flex">
                <hr />
                <p className="loginWith">Or Login With</p>
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
                Already have an account? <Link to="/login">Login now!</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
