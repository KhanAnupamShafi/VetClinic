import React from "react";
import { HashLink } from "react-router-hash-link";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useHistory } from "react-router";

const Register = () => {
  const { handleUserRegister, setIsLoading, error } = useAuth();

  // redirecting user to initial route
  let history = useHistory();

  const gotoLogin = () => {
    history.push("/login");
  };

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
      gotoLogin();
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
        className="flex justify-center py-12 bg-cover lg:rounded-l-sm                       
                        bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('https://i.ibb.co/Yj0whKD/custom-header-bg01.jpg')`,
        }}
      >
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            className="w-full h-auto bg-transparent hidden lg:block lg:w-8/12  bg-cover rounded-l-lg                       
                        bg-no-repeat bg-right"
          ></div>

          <div className="w-full  h-screen flex   lg:w-4/12  rounded-xl lg:rounded-l-none bg-transparent min-h-screen justify-center items-center">
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
                placeholder="User Name"
                {...register("Name", {
                  required: "This input is required.",
                  minLength: {
                    value: 4,
                    message: "User name should at least be 4 characters",
                  },
                })}
              />

              <ErrorMessage
                errors={errors}
                name="Name"
                render={({ messages }) => {
                  console.log("messages", messages);
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <p key={type} className="text-red-500">
                          {message}
                        </p>
                      ))
                    : null;
                }}
              />

              <input
                className="w-full text-gray-700 h-12 rounded-lg px-4 sm:text-sm lg:text-lg focus:ring-blue-600 mb-4"
                placeholder="Email"
                type="email"
                {...register("Email", {
                  required: "This input is required.",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter valid email",
                  },
                })}
              />

              <ErrorMessage
                errors={errors}
                name="Email"
                render={({ messages }) => {
                  console.log("messages", messages);
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <p key={type} className="text-red-500">
                          {message}
                        </p>
                      ))
                    : null;
                }}
              />
              <input
                className="w-full text-gray-700 h-12 rounded-lg px-4 sm:text-sm lg:text-lg focus:ring-blue-600 my-4"
                type="password"
                placeholder="Password"
                {...register("Password", {
                  required: "This input is required.",
                  pattern: {
                    value: /\d+/,
                    message: "Password must include number",
                  },
                  minLength: {
                    value: 8,
                    message: "Password length should at least be 8",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="Password"
                render={({ messages }) => {
                  console.log("messages", messages);
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <p key={type} className="text-red-500">
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

              <HashLink
                as={HashLink}
                to="/login#start"
                className="text-right text-textWhite py-5 mb-4"
              >
                Already Have An Account?
              </HashLink>

              {error && <h1 className="text-red-500">{error}</h1>}
              <div className="relative mt-5 justify-center">
                <div className="w-full bg-gray-200 mt-1 h-px"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
