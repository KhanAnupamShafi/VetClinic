import React from "react";
import { HashLink } from "react-router-hash-link";
import { ErrorMessage } from "@hookform/error-message";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { handleUserRegister, user, setUser, updateInfo, setIsLoading, error } =
    useAuth();
  // redirecting user to initial route
  const location = useLocation();
  const history = useHistory();
  const Redirect_uri = location.state?.from || "/";

  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  //send data to auth firebase
  const onSubmit = async (data) => {
    try {
      await handleUserRegister(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }

    // setUserData(data)
  };
  return (
    <div id="top" className="container-none mx-auto ">
      <div
        className="flex justify-center py-12"
        style={{
          background: `radial-gradient( circle, #58585a, #000000)`,
        }}
      >
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-8/12  bg-cover rounded-l-lg                       
                        bg-no-repeat  bg-center"
            style={{
              backgroundImage: `url('https://i.ibb.co/QMT523m/Hello-IMG1633957860202.jpg')`,
            }}
          ></div>

          <div className="w-full  h-screen flex   lg:w-4/12  rounded-xl lg:rounded-l-none bg-black min-h-screen justify-center items-center">
            <form
              className="bg-primary border h-auto sm:h-screen lg:w-full rounded-lg lg:rounded-l-none pt-8 pb-8 px-8 flex flex-col justify-start xl:justify-center items-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="font-light text-textWhite text-4xl mb-4">
                Sign
                <span className="font-bold text-secondary">Up</span>
              </label>

              <input
                className="w-full text-gray-700 h-12 rounded-lg px-4 sm:text-sm lg:text-lg focus:ring-blue-600 mb-4"
                placeholder="Email"
                {...register("multipleErrorInput", {
                  required: "This input is required.",
                  pattern: {
                    value: /\d+/,
                    message: "This input is number only.",
                  },
                  minLength: {
                    value: 11,
                    message: "This input must exceed 10 characters",
                  },
                })}
              />

              <ErrorMessage
                errors={errors}
                name="multipleErrorInput"
                render={({ messages }) => {
                  console.log("messages", messages);
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <p key={type} className="error-text">
                          {message}
                        </p>
                      ))
                    : null;
                }}
              />
              <input
                className="w-full text-gray-700 h-12 rounded-lg px-4 sm:text-sm lg:text-lg focus:ring-blue-600 mb-4"
                type="password"
                placeholder="Password"
                {...register("ErrorInput", {
                  required: "This input is required.",
                  pattern: {
                    value: /\d+/,
                    message: "This input is number only.",
                  },
                  minLength: {
                    value: 11,
                    message: "This input must exceed 10 characters",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="ErrorInput"
                render={({ messages }) => {
                  console.log("messages", messages);
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <p key={type} className="error-text">
                          {message}
                        </p>
                      ))
                    : null;
                }}
              />

              <input
                className="w-full py-5 tracking-widest cursor-pointer bg-secondary text-gray-200 uppercase hover:bg-blue-400 Hover:mb-4"
                type="submit"
              />

              <Link
                as={HashLink}
                to="/login"
                className="text-right text-textWhite py-5 mb-4"
              >
                Already Have An Account?
              </Link>

              {error && <h1 className="text-red-500">{error}</h1>}
              <div className="relative mt-5 justify-center">
                <div className="w-full bg-gray-200 mt-1 h-px"></div>
                <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-custom px-4 text-gray-500">
                  or sign-in with
                </span>

                <div className="mt-8">
                  <button className="w-full h-8 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700  transition mb-4">
                    Sign with Google
                  </button>
                  <button className="w-full h-8 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700  transition mb-4">
                    Sign with Facebook
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
