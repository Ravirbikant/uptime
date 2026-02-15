import "./App.css";
import { ProfileProvider } from "./context/ProfileContext";
import { ToastProvider } from "./context/ToastContext";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <ProfileProvider>
      <ToastProvider>
        <Navbar />
        <Body />
        <Footer />
      </ToastProvider>
    </ProfileProvider>
  );
}

export default App;
