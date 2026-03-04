import { BarChart2 } from "lucide-react";
import { Card } from "@geenius-ui/react-css";

export default function AnalyticsPage() {
  return (<div style={{ padding: "var(--space-8)", maxWidth: 1000 }}>
    <h1 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-6)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 700 }}><BarChart2 style={{ display: "inline", marginRight: 12, verticalAlign: "middle" }} /> Routing Analytics</h1>
    <div style={{ display: "grid", margin: "var(--space-4) 0", gap: "var(--space-4)", gridTemplateColumns: "1fr 1fr" }}>
      <Card padding="lg">
        <h3 style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Model Distribution</h3>
        <div style={{ display: "flex", gap: 4, height: 24, marginBottom: 16 }}>
          <div style={{ flex: 50, background: "var(--color-accent-primary)", borderRadius: "2px 0 0 2px" }}></div>
          <div style={{ flex: 30, background: "#FCD34D" }}></div>
          <div style={{ flex: 20, background: "#71717A", borderRadius: "0 2px 2px 0" }}></div>
        </div>
        <ul style={{ listStyle: "none", fontSize: "13px", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ display: "flex", justifyContent: "space-between" }}><span>gpt-4o</span><strong className="mono">50%</strong></li>
          <li style={{ display: "flex", justifyContent: "space-between" }}><span>claude-3-5-sonnet</span><strong className="mono">30%</strong></li>
          <li style={{ display: "flex", justifyContent: "space-between" }}><span>gpt-3.5-turbo</span><strong className="mono">20%</strong></li>
        </ul>
      </Card>
      <Card padding="lg">
        <h3 style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Failover Rate (7d)</h3>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16 }}>
          <span className="mono" style={{ fontSize: "32px", fontWeight: 700, color: "var(--color-warning)" }}>1.4%</span>
          <span style={{ fontSize: "12px", color: "var(--color-text-secondary)", textTransform: "uppercase" }}>of total requests</span>
        </div>
        <p style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>Successfully fell back to secondary models 1,420 times this week, preventing downtime.</p>
      </Card>
    </div>
  </div>);
}
