import { useState } from "react";
import "./App.css";
import { ProfileProvider } from "./context/ProfileContext";
import { ToastProvider } from "./context/ToastContext";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [activeTabId, setActiveTabId] = useState("overview");

  return (
    <ProfileProvider>
      <ToastProvider>
        <Navbar activeTabId={activeTabId} onTabChange={setActiveTabId} />
        <Body activeTabId={activeTabId} />
        <Footer />
      </ToastProvider>
    </ProfileProvider>
  );
}

export default App;
