import * as yup from "yup";
const passwordrules = /^.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
const loginschema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be atleast 6 characters long.")
    .required("Password is required.")
    .matches(
      passwordrules,
      "Password should contain atleast one uppercase letter, one lowercase letter and a number"
    ),
});
export default loginschema;
