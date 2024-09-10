import { React, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase"

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("result =>", result)
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("User =>", user)
        navigate("/")
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("error =>", errorCode, errorMessage)
        // ...
      });
  }

  const handleSignIn = async () => {
    try{
      setLoading(true)
      await signInWithEmailAndPassword(auth, email, password).then(()=> {
        navigate('/')
        setLoading(false)
      })
    } catch(err){
      setLoading(false)
    }
  }

  return (
    <div>
      <div>
        <div className="flex mx-auto flex-col w-1/3 items-center gap-5 bg-blue-500 px-20 py-20 rounded-3xl">
          <div className="flex flex-col items-center gap-10 w-full mb-10">
            <h1 className="text-white text-4xl font-bold">Sign In</h1>
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
          <Button onClick={handleSignIn} isLoading={loading} className="w-fit bg-black text-white">Login</Button>
          <Button onClick={handleSignInWithGoogle} className="w-fit bg-black text-white">Sign in With Google</Button>
        </div>
      </div>
    </div>
  )
}

export default SignIn
