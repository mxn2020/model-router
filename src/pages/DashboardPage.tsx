import { Activity, ShieldCheck, Zap } from "lucide-react";
import { Card, Badge } from "@geenius-ui/react-css";

export default function DashboardPage() {
  return (<div style={{ padding: "var(--space-8)", maxWidth: 1200 }}>
    <h1 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-6)", textTransform: "uppercase", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Activity size={24} /> Traffic Control</h1>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-4)", marginBottom: "var(--space-8)" }}>
      {[
        { l: "RPS (Avg)", v: "42.5", s: "+5%", i: Zap },
        { l: "Error Rate", v: "0.12%", s: "-0.05%", i: ShieldCheck },
        { l: "Routed Requests", v: "184.2K", s: "+12%", i: Activity }
      ].map(m => (<Card key={m.l} padding="lg">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)" }}><span style={{ fontWeight: 700, textTransform: "uppercase", color: "var(--color-text-secondary)", fontSize: "13px" }}>{m.l}</span><m.i size={16} style={{ color: "var(--color-accent-primary)" }} /></div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--font-size-2xl)", fontWeight: 700 }}>{m.v} <span style={{ fontSize: "13px", color: "var(--color-success)", fontWeight: 400, marginLeft: 8 }}>↑ {m.s}</span></div>
      </Card>))}
    </div>

    <Card padding="lg">
      <h3 style={{ fontSize: "14px", textTransform: "uppercase", fontWeight: 700, marginBottom: "var(--space-4)" }}>Live Route Traffic</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid var(--color-border)" }}>
            <th style={{ textAlign: "left", padding: "12px 0", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Timestamp</th>
            <th style={{ textAlign: "left", padding: "12px 0", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Target Model</th>
            <th style={{ textAlign: "left", padding: "12px 0", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Latency</th>
            <th style={{ textAlign: "right", padding: "12px 0", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Tokens</th>
          </tr>
        </thead>
        <tbody>
          {[
            { t: "15:42:01", m: "gpt-4o", l: "420ms", k: 1024 },
            { t: "15:41:59", m: "claude-3-5-sonnet", l: "810ms", k: 2048 },
            { t: "15:41:55", m: "gpt-3.5-turbo", l: "120ms", k: 150 },
            { t: "15:41:50", m: "gemini-1.5-pro", l: "650ms", k: 840 }
          ].map(r => (<tr key={r.t} style={{ borderBottom: "1px solid var(--color-border)" }}>
            <td className="mono" style={{ padding: "12px 0", fontSize: "13px" }}>{r.t}</td>
            <td style={{ padding: "12px 0" }}><Badge variant="warning">{r.m}</Badge></td>
            <td className="mono" style={{ padding: "12px 0", fontSize: "13px" }}>{r.l}</td>
            <td className="mono" style={{ padding: "12px 0", fontSize: "13px", textAlign: "right" }}>{r.k}</td>
          </tr>))}
        </tbody>
      </table>
    </Card>
  </div>);
}
