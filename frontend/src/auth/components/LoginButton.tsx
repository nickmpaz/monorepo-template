import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../../utils/firebase";
import {
  AUTHENTICATED_REDIRECT,
  FIREBASE_SIGNIN_FLOW,
} from "../definitions/constants";

const uiConfig = {
  signInFlow: FIREBASE_SIGNIN_FLOW,
  signInSuccessUrl: AUTHENTICATED_REDIRECT,
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

export const LoginButton = () => {
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};
