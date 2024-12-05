# React + Vite

- created firebase in the correct way by creating the context.

  - so first we have to configure our firebase connection.
  - create a context name it for eg. FirebaseContext.

    - pass this to the useContext hook by creating a custom hook like : const useFirebase = () => useContext(FirebaseContext);

  - Create all the function in the FirebaseProvider function in a single place which can access any where in the app.

    - const putData = (key, data) => set(ref(database, key), data);

    - export const FirebaseProvider = (props) => {
    - const signupUserWithEmailAndPassword = (email, password) => {
      - return createUserWithEmailAndPassword(firebaseAuth, email, password);
    - };
    - return (
      - <FirebaseContext.Provider
      - value={{ signupUserWithEmailAndPassword, putData }}
      - >
      - {props.children}
      - </FirebaseContext.Provider>
    - );
    - };
