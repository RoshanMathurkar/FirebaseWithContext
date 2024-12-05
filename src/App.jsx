import "./App.css";
import { useFirebase } from "./context/firebase";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebase();
  //console.log(firebase);

  return (
    <>
      <h1>Firebase Context</h1>

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="password"
      />
      <button
        onClick={() => {
          firebase.signupUserWithEmailAndPassword(email, password);
          firebase.putData("user/", { email, password });
        }}
      >
        SignUp
      </button>
    </>
  );
}

export default App;
