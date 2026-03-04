import { Settings } from "lucide-react";
import { Button, Card, Input, Label } from "@geenius-ui/react-css";

export default function SettingsPage() {
  return (<div style={{ padding: "var(--space-8)", maxWidth: 600 }}>
    <h1 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-6)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 700 }}><Settings style={{ display: "inline", marginRight: 12, verticalAlign: "middle" }} /> System Settings</h1>
    <Card padding="lg">
      <h3 style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", marginBottom: "var(--space-4)" }}>API Intercept Configuration</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <div><Label style={{ marginBottom: 4 }}>Base URL Proxy</Label><Input type="text" defaultValue="https://router.openclaw.dev/v1" readOnly /></div>
        <div><Label style={{ marginBottom: 4 }}>Organization ID</Label><Input type="text" defaultValue="org_mr_8f92j" readOnly /></div>
        <Button variant="primary" style={{ alignSelf: "flex-start" }}>Regenerate Keys</Button>
      </div>
    </Card>
  </div>);
}
