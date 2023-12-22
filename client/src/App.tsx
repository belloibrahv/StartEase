import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SchoolPage from "./pages/SchoolPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/school" element={<SchoolPage />} />
      </Routes>
    </Router>
  );
};

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(<App />);
