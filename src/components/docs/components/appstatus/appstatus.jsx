import "./appstatus.css";

export default function AppStatus({ status }) {
  return (
    <div id="appStatus-mainbody">
      <div 
        id="appStatus-indicator"
        className={status}
      />
      <div id="appStatus-status" className={status}>{status}</div>
    </div>
  )
}
