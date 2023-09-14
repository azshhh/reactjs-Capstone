import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const { formFields, setFormFields } = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  
  return (
    <div>
      <h1>SignUp with email and password</h1>
      <form onSubmit={() => {}}>
        <label>Name</label>
        <input type="text" required />

        <label>Email</label>
        <input type="text" required />

        <label>Password</label>
        <input type="text" required />

        <label>Confirm Password</label>
        <input type="text" required />

        <button type="subimit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
