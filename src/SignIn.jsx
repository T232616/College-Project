import React from "react";
import "./Sign.css";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
const SignIn = () => {
  return (
    <>
      <h1 className="text-center my-2">LogIn To Your Account</h1>

      <div className="container">
        <form>
          <div className="row my-5">
            <FormControl className="col-9 mx-auto ">
              <InputLabel className="inputLabel" htmlFor="my-input">
                Username
              </InputLabel>
              <Input
                type="text"
                className="inputField"
                id="my-input"
                aria-describedby="my-helper-text"
                required
              />
            </FormControl>
            <FormControl className="col-9 mx-auto ">
              <InputLabel className="inputLabel" htmlFor="my-input">
                Password
              </InputLabel>
              <Input
                type="password"
                className="inputField"
                id="my-input"
                aria-describedby="my-helper-text"
                required
              />
            </FormControl>

            <Button
              className="btn col-6 mx-auto my-3"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default SignIn;
