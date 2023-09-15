import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match.");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // We have created a User with email and password, but now create document for that user in db
      await createUserDocumentFromAuth(user, { displayName });
      alert("User successfully created");
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already registered, please try with different email.");
      } else {
        console.log("User creation encountered an error.", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>SignUp with email and password</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
          autoComplete="on"
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          autoComplete="on"
        />
        <FormInput
          label="New Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          autoComplete="new-password"
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          autoComplete="new-password"
        />
        <button type="subimit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
