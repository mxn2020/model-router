import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import RoutingRulesPage from "./pages/RoutingRulesPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
export default function App() {
  return (<BrowserRouter>
    <div style={{display:"flex"}}>
      <Sidebar />
      <main style={{marginLeft:"var(--sidebar-width)",flex:1,minHeight:"100vh"}}><Routes>
        <Route path="/" element={<DashboardPage />} /> <Route path="/rules" element={<RoutingRulesPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} /> <Route path="/fallbacks" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes></main>
    </div>
  </BrowserRouter>);
}
