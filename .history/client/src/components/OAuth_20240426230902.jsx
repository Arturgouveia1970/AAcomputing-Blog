// import { Button } from "flowbite-react";
// import { AiFillGoogleCircle } from "react-icons/ai";
// import { GoogleAuthProvider, signInWithEmailAndPassword, getAuth } from "firebase/auth";
// import { app } from "../firebase";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { signInSuccess } from "../redux/user/userSlice";

// export default function OAuth() {
//     const auth = getAuth(app)
//     const dispatch = useDispatch()
//     const navigate = useNavigate()

//   const handleGoogleClick = async () => {
    
//     const provider = new GoogleAuthProvider()
//     provider.setCustomParameters({ prompt: 'select_account' }) 
//     try {
//       const resultsFromGoogle = await signInWithEmailAndPassword(auth, provider)
//       console.log(resultsFromGoogle)
//       const res = await fetch('/api/auth/google', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             name: resultsFromGoogle.user.displayName,
//             email: resultsFromGoogle.user.email,
//             googlePhotoUrl: resultsFromGoogle.user.photoURL,
//         }),
//         })
//     const data = await res.json()
//     if (res.ok){
//         dispatch(signInSuccess(data))
//         navigate('/')
//     }
//     } catch (error) {
//       console.error(error)
//     }   
//   };

//   return (
//     <Button 
//       type="button" 
//       gradientDuoTone='pinkToOrange' 
//       outline
//       onClick={handleGoogleClick}
//     >
//       <AiFillGoogleCircle className="w-6 h-6 mr-2" /> 
//       Continue with Google
//     </Button>
//   );
// }

import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInSuccess } from "../redux/user/userSlice";

export default function OAuth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailPasswordClick = async () => {
    const email = "user@example.com"; // replace with user's email
    const password = "password"; // replace with user's password
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      const res = await fetch("/api/auth/email-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleEmailPasswordClick}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" /> Continue with Google
    </Button>
  );
}