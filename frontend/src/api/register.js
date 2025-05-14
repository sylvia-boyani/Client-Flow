import { useState } from "react";
import { register } from "../api/auth";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await register({ email, password, passwordConfirmation });
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <input type="password" placeholder="Confirm Password" onChange={(e) => setPasswordConfirmation(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
}
