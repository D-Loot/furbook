import { useMutation } from "@apollo/client";
import { LockClosedIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth.js";
import { LOGIN_USER } from "../../utils/mutation.js";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="min-h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-charcoal">
          Login
        </h2>
        {data ? (
          <p className="font-medium text-indigo-600 hover:text-indigo-500">
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit} className="mt-8 space-y-6">
            <div className="mb-0">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-cornflower text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-brightBlue focus:z-10 sm:text-sm"
                placeholder="Email Address"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div className="mt-1">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-cornflower text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-brightBlue focus:z-10 sm:text-sm"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brightBlue hover:bg-denim focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brightBlue"
                style={{ cursor: "pointer" }}
                type="submit"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-ltGray group-hover:text-brightBlue"
                    aria-hidden="true"
                  />
                </span>
                Submit
              </button>
            </div>
          </form>
        )}

        {error && <div className="text-orange">{error.message}</div>}
      </div>
    </main>
  );
};

export default Login;
