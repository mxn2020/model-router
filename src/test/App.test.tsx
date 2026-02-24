import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import DashboardPage from "../pages/DashboardPage"; import RoutingRulesPage from "../pages/RoutingRulesPage";
import AnalyticsPage from "../pages/AnalyticsPage"; import SettingsPage from "../pages/SettingsPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }
describe("Sidebar", () => { it("renders nav items", () => { wrap(<Sidebar/>); expect(screen.getByText("Model Router")).toBeInTheDocument(); }); });
describe("Pages", () => {
  it("Dashboard renders", () => { wrap(<DashboardPage/>); expect(screen.getByText("Traffic Control")).toBeInTheDocument(); });
  it("RoutingRules renders", () => { wrap(<RoutingRulesPage/>); expect(screen.getByText("Complex Reasoning")).toBeInTheDocument(); });
  it("Analytics renders", () => { wrap(<AnalyticsPage/>); expect(screen.getByText("Routing Analytics")).toBeInTheDocument(); });
  it("Settings renders", () => { wrap(<SettingsPage/>); expect(screen.getByText("System Settings")).toBeInTheDocument(); });
});
