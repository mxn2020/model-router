import { Settings } from "lucide-react";
export default function SettingsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:600}}>
    <h1 style={{fontSize:"var(--font-size-2xl)",marginBottom:"var(--space-6)",textTransform:"uppercase",letterSpacing:"1px",fontWeight:700}}><Settings style={{display:"inline",marginRight:12,verticalAlign:"middle"}}/> System Settings</h1>
    <div className="card" style={{padding:"var(--space-5)"}}>
      <h3 style={{fontSize:"14px",fontWeight:700,textTransform:"uppercase",marginBottom:"var(--space-4)"}}>API Intercept Configuration</h3>
      <div style={{display:"flex",flexDirection:"column",gap:"var(--space-4)"}}>
        <div><label style={{fontSize:"12px",fontWeight:700,textTransform:"uppercase",marginBottom:4,display:"block"}}>Base URL Proxy</label><input type="text" defaultValue="https://router.openclaw.dev/v1" className="input" readOnly /></div>
        <div><label style={{fontSize:"12px",fontWeight:700,textTransform:"uppercase",marginBottom:4,display:"block"}}>Organization ID</label><input type="text" defaultValue="org_mr_8f92j" className="input" readOnly /></div>
        <button className="btn btn-primary" style={{alignSelf:"flex-start"}}>Regenerate Keys</button>
      </div>
    </div>
  </div>);
}
