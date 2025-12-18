import { useNavigate } from "react-router-dom"

export default function SearchResultCard({ icon, title, description, param }) {
  const navigate = useNavigate()
  return (
    <div 
      id="searchResultCard"
      onClick={() => navigate(`/docs/${param}`)}
    >
      <img 
        src={`${import.meta.env.BASE_URL}${icon}`}
        alt="AppIcon" 
        id="searchResultCard-icon"
      />
      <div id="searchResultCard-title" translate="off">
        {title}
      </div>
      <div id="searchResultCard-description">
        {description}
      </div>
    </div>
  )
}