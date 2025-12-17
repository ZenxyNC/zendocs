import './navbar.css'

export default function Navbar({ ToCOpen, setToCOpen }) {
  return (
    <div id="navbar-mainbody">
      <img src={import.meta.env.BASE_URL + "resources/sidebar.svg"} alt="" onClick={() => setToCOpen(!ToCOpen)}/>
    </div>
  )
}