import { useState } from "react";
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
      await createUserDocumentFromAuth(user);
      alert("User created");
    } catch (error) {
      console.error("User creation encountered an error.", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>SignUp with email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="subimit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
