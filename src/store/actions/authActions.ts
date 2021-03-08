export const processLogin = (credentials: any) => {
  return (dispatch: any, getState: any, { getFirebase }: any) => {
    dispatch({ type: "LOGIN_START" });
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err: any) => {
        dispatch({ type: "LOGIN_ERROR", data: err });
      });
  };
};

export const processRegister = (newUserInfo: any) => {
  return (dispatch: any, getState: any, { getFirebase, getFirestore }: any) => {
    dispatch({ type: "REGISTER_START" });

    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUserInfo.email, newUserInfo.password)
      .then((response: any) => {
        return firestore.collection("users").doc(response.user.uid).set({
          firstName: newUserInfo.firstName,
          lastName: newUserInfo.lastName,
        });
      })
      .then(() => {
        dispatch({ type: "REGISTER_SUCCESS" });
      })
      .catch((err: any) => {
        dispatch({ type: "REGISTER_ERROR", err });
      });
  };
};

export const processLogout = () => {
  return (dispatch: any, getState: any, { getFirebase }: any) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      });
  };
};
