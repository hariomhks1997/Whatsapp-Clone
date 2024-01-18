import "./App.css";
import AccountProvider from "./context/AccountProvider";
import Messenger from "./components/messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId =
    "16515353891-tv5s5v9jlem0o27u8v2a9aplsq8qncrh.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
