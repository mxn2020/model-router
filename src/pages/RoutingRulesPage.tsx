import { GitBranch, Plus, ArrowRight } from "lucide-react";
const rules = [
  { id:"1", name:"Complex Reasoning", condition:"Query length > 1000", primary:"gpt-4o", fallback:"claude-3-5-sonnet", active:true },
  { id:"2", name:"Quick Chat", condition:"Default", primary:"gpt-3.5-turbo", fallback:"claude-haiku", active:true },
  { id:"3", name:"Code Generation", condition:"Contains code blocks", primary:"claude-3-5-sonnet", fallback:"gpt-4o", active:false }
];
export default function RoutingRulesPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:1000}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-6)"}}>
      <h1 style={{fontSize:"var(--font-size-2xl)",textTransform:"uppercase",letterSpacing:"1px",fontWeight:700}}><GitBranch style={{display:"inline",marginRight:12,verticalAlign:"middle"}}/> Routing Rules</h1>
      <button className="btn btn-primary"><Plus size={16}/> Add Rule</button>
    </div>
    <div style={{display:"flex",flexDirection:"column",gap:"var(--space-4)"}}>
      {rules.map(r=>(<div key={r.id} className="card" style={{padding:"var(--space-4)",borderLeft:r.active?"4px solid var(--color-accent-primary)":"4px solid var(--color-bg-tertiary)",opacity:r.active?1:0.6}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-3)"}}>
          <h3 style={{fontSize:"16px",fontWeight:700,textTransform:"uppercase"}}>{r.name}</h3>
          <span className={`badge ${r.active?"badge-yellow":"badge-gray"}`}>{r.active?"Active":"Disabled"}</span>
        </div>
        <div style={{fontSize:"14px",color:"var(--color-text-secondary)",marginBottom:"var(--space-4)"}}><strong>Condition:</strong> {r.condition}</div>
        <div style={{display:"flex",alignItems:"center",gap:"var(--space-3)",background:"var(--color-bg-secondary)",padding:"var(--space-2) var(--space-3)",borderRadius:"var(--radius-sm)"}}>
          <span className="badge badge-gray" style={{fontFamily:"var(--font-mono)",textTransform:"none"}}>{r.primary}</span>
          <ArrowRight size={14} style={{color:"var(--color-text-tertiary)"}}/>
          <span className="badge badge-gray" style={{fontFamily:"var(--font-mono)",textTransform:"none"}}>{r.fallback}</span>
        </div>
      </div>))}
    </div>
  </div>);
}
