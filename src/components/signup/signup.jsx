import React from "react";
import Navbar from "../navbar/navbar";
import { Formik, Form } from "formik";
import { signupSchema } from "../../schemas/signupschema";
import Custominput from "../inputcomponents/custominput";
import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen pt-16 px-4 pb-8">
        <div className="w-full max-w-xl">
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-amber-100 mb-4">
              <UserPlus className="w-6 h-6 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Create an Account
            </h2>
            <p className="text-gray-600">
              Join us to explore our pure honey products
            </p>
          </div>

          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              mobilenumber: "",
              email: "",
              password: "",
              confirmpassword: "",
            }}
            validationSchema={signupSchema}
            validateOnBlur={true}
          >
            {(props) => (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <Form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Custominput
                      name="firstname"
                      label="First Name"
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    />
                    <Custominput
                      name="lastname"
                      label="Last Name"
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <Custominput
                    name="mobilenumber"
                    label="Mobile Number"
                    type="number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />

                  <Custominput
                    name="email"
                    label="Email Address"
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Custominput
                      name="password"
                      label="Password"
                      type="password"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    />
                    <Custominput
                      name="confirmpassword"
                      label="Confirm Password"
                      type="password"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-600">
                        I agree to the{" "}
                        <a
                          href="#"
                          className="text-amber-600 hover:text-amber-700"
                        >
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          className="text-amber-600 hover:text-amber-700"
                        >
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-amber-700 transform transition-all duration-200 hover:shadow-lg"
                  >
                    Create Account
                  </button>

                  <div className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="font-medium text-amber-600 hover:text-amber-700"
                    >
                      Sign in
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

export default Signup;
