import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    setUser,
    setIsLoading,
    error,
    setError,
    signInUser,
    handleGoogleSignIn,
    handleFacebookSignIn,
    updateInfo,
  } = useAuth();
  console.log(error);

  // redirecting user to initial route
  const location = useLocation();
  const history = useHistory();
  const Redirect_uri = location.state?.from || "/";

  const GoogleSignInHandler = () => {
    handleGoogleSignIn()
      .then((result) => {
        setUser(result.user);
        history.push(Redirect_uri);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(setIsLoading(false));
  };

  const SignInHandler = () => {
    signInUser(email, password)
      .then((result) => {
        updateInfo(result.user?.email);
        setUser(result.user);
        history.push(Redirect_uri);
        window.location.reload(false);
        setError("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(setIsLoading(false));
  };

  // eslint-disable-next-line no-unused-vars
  const FacebookSignInHandler = () => {
    handleFacebookSignIn()
      .then((result) => {
        setUser(result.user);
        history.push(Redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(setIsLoading(false));
  };

  return (
    <div>
      <div id="start" className="container-none mx-auto ">
        <div
          className="flex justify-center py-12"
          style={{
            background: `url("https://i.ibb.co/Yj0whKD/custom-header-bg01.jpg")`,
          }}
        >
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-8/12  bg-cover rounded-l-lg                       
                        bg-no-repeat  bg-center"
              style={{
                backgroundImage: `url('http://webdesign-finder.com/pet-space-clinic/wp-content/uploads/2017/06/slide1-1.jpg')`,
              }}
            ></div>

            <div className="w-full  h-screen flex   lg:w-4/12  rounded-xl lg:rounded-l-none bg-gray min-h-screen justify-center items-center">
              <div className="bg-gray text-blue-700 w-96 h-auto sm:h-screen lg:w-full rounded-lg lg:rounded-l-none pt-8 pb-8 px-8 flex flex-col    justify-start xl:justify-center items-center">
                <label className="font-bold text-white text-4xl mb-4">
                  Sign
                  <span className="font-bold text-secondary"> In</span>
                </label>
                <input
                  type="text"
                  className="w-full text-gray h-12 rounded-lg px-4 sm:text-sm lg:text-lg focus:ring-blue-600 mb-4"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="w-full text-gray-700 h-12 rounded-lg px-4 sm:text-sm lg:text-lg focus:ring-blue-600 mb-4"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  onClick={SignInHandler}
                  className="w-full h-12 rounded-lg bg-secondary text-white tracking-widest uppercase font-semibold hover:bg-primary  transition mb-4"
                >
                  Login
                </button>
                <div className="w-full flex flex-wrap justify-between">
                  <HashLink
                    as={HashLink}
                    to="/register#top"
                    className="text-right mb-4 text-white"
                  >
                    Register New Account
                  </HashLink>
                  <p className="text-right mb-4 text-white">Forgot password</p>
                </div>

                {error && <h1 className="text-red-500">{error}</h1>}
                <div className="flex flex-row justify-center mb-8">
                  <span className="absolute bg-gray text-white px-4 text-gray-500">
                    or sign-in with
                  </span>
                  <div className="w-full bg-gray-200 mt-3 h-px"></div>
                </div>
                <button
                  onClick={GoogleSignInHandler}
                  className="w-full h-12 rounded-lg bg-red-600 text-white uppercase font-semibold hover:bg-red-700  transition mb-4"
                >
                  Sign with Google
                </button>
                <button
                  //   onClick={FacebookSignInHandler}
                  className="w-full h-12 rounded-lg bg-blue-600 text-white uppercase font-semibold hover:bg-blue-700  transition mb-4"
                >
                  Sign with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
