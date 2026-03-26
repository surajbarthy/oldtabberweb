import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import PrivacyPage from "./PrivacyPage.jsx";
import V2Home from "./V2Home.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/v2" element={<V2Home />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  );
}
