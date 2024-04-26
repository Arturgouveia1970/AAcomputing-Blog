import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";

export default function OAuth() {

  const handleGoogleClick = async () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' }) 
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider)
      console.lo
    } catch (error) {
      console.error(error)
    }   
  };

  return (
    <Button 
      type="button" 
      gradientDuoTone='pinkToOrange' 
      outline
      onClick={handleGoogleClick}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" /> 
      Continue with Google
    </Button>
  );
}