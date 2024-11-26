import * as yup from "yup";

// Define the validation schema
const signupSchema = yup.object().shape({
  firstname: yup
    .string()
    .required("First name is required")
    .min(2, "First name should be at least 2 characters long"),

  lastname: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name should be at least 2 characters long"),

  mobilenumber: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),

  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should be at least 8 characters long")
    .matches(/[A-Z]/, "Password should contain at least one uppercase letter")
    .matches(/[a-z]/, "Password should contain at least one lowercase letter")
    .matches(/[0-9]/, "Password should contain at least one number")
    .matches(
      /[@$!%*?&#]/,
      "Password should contain at least one special character"
    ),

  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export { signupSchema };
