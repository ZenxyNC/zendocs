import './navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar({ ToCOpen, setToCOpen }) {
  const navigate = useNavigate();
  return (
    <div id="navbar-mainbody">
      <div 
        id='navbar-zendocs'
        onClick={() => navigate("/")}
      >
        <img 
          src={import.meta.env.BASE_URL + "/zendocs-plain.svg"} 
          alt="" 
          id='navbar-img'
        />
        <span>ZenDocs</span>
      </div>
      <img 
        src={import.meta.env.BASE_URL + "resources/sidebar.svg"} 
        alt="" 
        id='navbar-button'
        onClick={() => setToCOpen(!ToCOpen)}
      />
    </div>
  )
}