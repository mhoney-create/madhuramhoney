import React from "react";
import Navbar from "../navbar/navbar";
import { Formik, Form } from "formik";
import Custominput from "../inputcomponents/custominput";
import loginschema from "../../schemas/loginschema";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen pt-16 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-amber-100 mb-4">
              <Lock className="w-6 h-6 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome Back!
            </h2>
            <p className="text-gray-600">
              Please enter your details to sign in
            </p>
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginschema}
            validateOnBlur={true}
          >
            {(props) => (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <Form className="space-y-6">
                  <div className="space-y-6">
                    <Custominput
                      name="email"
                      label="Email Address"
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    />
                    <Custominput
                      type="password"
                      name="password"
                      label="Password"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Remember me
                      </span>
                    </label>
                    <button
                      type="button"
                      className="text-sm text-amber-600 hover:text-amber-700 font-medium"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-amber-700 transform transition-all duration-200 hover:shadow-lg"
                  >
                    Sign In
                  </button>

                  <div className="text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="font-medium text-amber-600 hover:text-amber-700"
                    >
                      Sign up
                    </Link>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
