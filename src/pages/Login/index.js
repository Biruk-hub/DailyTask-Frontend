import React, { useState, useContext } from "react";
import PageWrapper from "../../components/page_wrapper";
import { Link, useNavigate } from "react-router-dom";
import Heading from "../../components/heading";
import Text from "../../components/text";
import CustomInput from "../../components/input";
import CustomButton from "../../components/custom_button";
import { UserContext } from "../../provider/user";
import { GlobalMessageContext } from "../../provider/message/index";
import axios from "axios";
import Loading from "../../components/loading";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
  const { setMessage } = useContext(GlobalMessageContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleUsernameChange = (e) => {
    setCredentials({
      ...credentials,
      username: e.target.value,
    });
  };
  const handlePasswordChange = (e) => {
    setCredentials({
      ...credentials,
      password: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios
        .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, credentials)
        .then((res) => {
          setUserData({
            id: res.data.user.id,
            name: res.data.user.fullname,
            token: res.data.token,
          });
          navigate("/");
        })
        .catch((err) => {
          setMessage({
            visible: true,
            header: "Error",
            message: err.response.data,
            error: true,
          });
        });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <PageWrapper>
      <div className="relative flex justify-center items-center">
        <div className="space-y-2">
          <Heading primary={true} size="3xl">
            Login
          </Heading>
          {/* username input */}
          <div className="relative mb-4">
            <Text primary={true}>Username</Text>
            <CustomInput
              type="email"
              name="username"
              placeholder="username"
              value={credentials.username}
              onValueChange={handleUsernameChange}
            />
          </div>
          {/* password input */}
          <div className="relative mb-4">
            <Text primary={true}>Password</Text>
            <CustomInput
              type="password"
              name="password"
              placeholder="password"
              value={credentials.password}
              onValueChange={handlePasswordChange}
            />
          </div>
          {/* action buttons */}
          <div className="flex justify-between items-center space-x-2">
            <CustomButton text="Login" primary={true} onClick={handleSubmit} />
            <Link to="/register">
              <p className="text-sm hover:underline hover:text-blue-500">
                Don't have an account ?
              </p>
            </Link>
          </div>
        </div>
        {loading && <Loading />}
      </div>
    </PageWrapper>
  );
};

export default LoginPage;
