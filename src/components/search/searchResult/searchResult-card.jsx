

export default function SearchResultCard({ icon, title, description, param }) {
  return (
    <div id="searchResultCard">
      <img 
        src={icon}
        alt="AppIcon" 
        id="searchResultCard-icon"
      />
      <div id="searchResultCard-title">
        {title}
      </div>
      <div id="searchResultCard-description">
        {description}
      </div>
    </div>
  )
}