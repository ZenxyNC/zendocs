import "./appversion.css";

export default function AppVersion({ version }) {
  return (
    <div id="appVersion-mainbody">
      <div id="appVersion-version">v{version}</div>
    </div>
  )
}
