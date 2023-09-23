"use client";
import {FormEvent, useState} from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    const newUser = {
        email,
        password
    }
    await fetch("http://localhost:3000/api/users", {
        method: "POST",
        body: JSON.stringify(newUser)
    })
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
        <button type={"submit"}>Submit</button>
    </form>
  );
}
