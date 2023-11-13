import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schema/index";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );

  return (
    <>
      <div className="main_div">
        <div className="card_div">
          <div className="min_div">
            <h1 className="m-0 font-sans text-3xl text-[#55311c]">Welcome!</h1>
            <p className="mt-1.5 mb-7 text-lg font-sans">
              To this website for programmers.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="input-block">
                <label htmlFor="name" className="input-label">
                  Name
                </label>
                <input
                  type="name"
                  autoComplete="off"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <p className=" text-xs text-[#b22b27]">{errors.name}</p>
                ) : null}
              </div>
              <div className="input-block">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className=" text-2xl text-[b22b27]">{errors.email}</p>
                ) : null}
              </div>
              <div className="input-block">
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className=" text-2xl text-[b22b27]">{errors.password}</p>
                ) : null}
              </div>
              <div className="input-block">
                <label htmlFor="confirm_password" className="input-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirm_password && touched.confirm_password ? (
                  <p className=" text-2xl text-[b22b27]">
                    {errors.confirm_password}
                  </p>
                ) : null}
              </div>
              <div className="flex justify-between items-center flex-wrap sm:justify-center">
                <a href="#" className="text-gray-600 text-sm ">
                  Want to register using Gmail?
                </a>
                <button className="input-button " type="submit">
                  Registration
                </button>
              </div>
            </form>
            <p className=" mt-11 text-sm text-center">
              Already have an account?
              <a href="#" className="text-[#8c7569] hover:text-[#55311c]">
                Sign In now
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
