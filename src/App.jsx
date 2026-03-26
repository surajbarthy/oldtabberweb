import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import PrivacyPage from "./PrivacyPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  );
}
