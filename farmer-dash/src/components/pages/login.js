import React, {useState}from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import {Select} from 'antd';
import './login.css'; // Adjust the path based on the actual location of your CSS file
import { Link } from 'react-router-dom';
const { Option } = Select;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] =useState("");
  function handleSubmit(e) {
   

    console.log(email, password);
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userType,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./dash";
        }
      });
    }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img src="https://img.freepik.com/premium-vector/logo-g203-india-with-lotus-flower-middle_220166-3141.jpg" alt='G20'/>
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
         
        >
          <p className="form-title">Welcome Back</p>
          <p>Login to the Dashboard</p>

          <Form.Item
            name="role"
            rules={[{ required: true, message: 'Please select a role!' }]}
          >
            <Select placeholder="Select a role"
           
            onChange={(e) => setUserType(e.value)}
           >
            <Option  value="Farmer">Farmer</Option>
              <Option value="admin">Admin</Option>
              <Option value="user">Head Officials</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Phone number' }]}
          >
            <Input placeholder="E Mail" 
             onChange={(e) => setEmail(e.target.value)}/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}

          >
            <Input.Password placeholder="Password" 
             onChange={(e) => setPassword(e.target.value)}/>
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
         
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              LOGIN
            </Button>
          </Form.Item>
          <Form.Item name="register" valuePropName="checked">
            <Link to="/register">Register Here</Link>
          </Form.Item>
         
        </Form>
      </div>
    </div>
  );
};

export default Login;