import "./App.css";
import { ProfileProvider } from "./context/ProfileContext";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  return (
    <ProfileProvider>
      <Navbar />
      <Body />
    </ProfileProvider>
  );
}

export default App;
