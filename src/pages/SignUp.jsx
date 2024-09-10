import { React, useState } from "react";
import { Input, Button, divider } from "@nextui-org/react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div>
      <div className="flex mx-auto flex-col w-1/3 items-center gap-5 bg-blue-500 px-20 py-20 rounded-3xl">
        <div className="flex flex-col items-center gap-10 w-full mb-10">
          <h1 className="text-white text-4xl font-bold">Sign Up</h1>
          <Input
            isRequired
            type="text"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            defaultValue=""
            className="max-w-xs"
          />
          <Input
            isRequired
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            defaultValue=""
            className="max-w-xs"
          />
          <Input
            isRequired
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            defaultValue=""
            className="max-w-xs"
          />
        </div>
        <Button className="w-fit bg-black text-white">Sign Up</Button>

        <h1 className="text-center">OR</h1>

        <Link to="" className="font-bold underline">
          Sign Up with Google
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
