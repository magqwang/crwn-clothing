// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import {
  // auth,
  // signInWithGoogleRedirect,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/Firebase";
import SignUpForm from "../../components/SignUpForm";

const SignIn = () => {
  // useEffect(() => {
  //   const getUser = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };

  //   getUser();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
