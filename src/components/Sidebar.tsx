import { Link, useLocation } from "react-router-dom";
import { Activity, GitBranch, BarChart2, CheckCircle2, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
  const loc = useLocation();
  const links = [
    { to: "/", icon: Activity, label: "Traffic Dashboard" },
    { to: "/rules", icon: GitBranch, label: "Routing Rules" },
    { to: "/analytics", icon: BarChart2, label: "Analytics" },
    { to: "/fallbacks", icon: CheckCircle2, label: "Fallbacks Status" },
    { to: "/settings", icon: Settings, label: "Settings" }
  ];
  return (<aside style={{width:"var(--sidebar-width)",background:"var(--color-bg-card)",borderRight:"1px solid var(--color-border)",height:"100vh",position:"fixed",display:"flex",flexDirection:"column"}}>
    <div style={{padding:"var(--space-5)",display:"flex",alignItems:"center",gap:"var(--space-3)",borderBottom:"1px solid var(--color-border)",background:"var(--color-bg-secondary)"}}>
      <GitBranch size={20} style={{color:"var(--color-accent-primary)"}}/><strong style={{fontSize:"1.1rem",letterSpacing:"1px",textTransform:"uppercase"}}>Model Router</strong>
    </div>
    <nav style={{padding:"var(--space-4)",flex:1,display:"flex",flexDirection:"column",gap:"var(--space-2)"}}>
      {links.map(l=><Link key={l.to} to={l.to} style={{display:"flex",alignItems:"center",gap:"var(--space-3)",padding:"var(--space-3)",borderRadius:"var(--radius-sm)",color:loc.pathname===l.to?"var(--color-text-primary)":"var(--color-text-secondary)",background:loc.pathname===l.to?"var(--color-bg-hover)":"transparent",fontWeight:700,fontSize:"var(--font-size-sm)",textTransform:"uppercase",transition:"all var(--transition-fast)",borderLeft:loc.pathname===l.to?"3px solid var(--color-accent-primary)":"3px solid transparent"}}><l.icon size={18} style={{color:loc.pathname===l.to?"var(--color-accent-primary)":"inherit"}}/>{l.label}</Link>)}
    </nav>
    <div style={{padding:"var(--space-4)",borderTop:"1px solid var(--color-border)",display:"flex",justifyContent:"flex-end"}}><ThemeToggle /></div>
  </aside>);
}
