import "./mainTitle.css"

import { useNavigate } from "react-router-dom"

export default function MainTitle({ title, description, navigateTo, navigateToParam }) {
  const navigate = useNavigate()

  return (
    <div id="mainTitle-mainbody">
      <h1 id="mainTitle-title">
        {title}
      </h1>
      <p id="mainTitle-text">
        {description}
      </p>
      <button 
        id="mainTitle-button"
        onClick={() => navigate(navigateToParam)}
      >
        {navigateTo ? navigateTo : "Explore"}
      </button>
    </div>
  )
}