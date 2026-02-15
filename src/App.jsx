import "./App.css";
import { ProfileProvider } from "./context/ProfileContext";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <ProfileProvider>
      <Navbar />
      <Body />
      <Footer />
    </ProfileProvider>
  );
}

export default App;
