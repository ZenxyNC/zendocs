import Search from "/resources/search.svg"

export default function Searchbar({ searchQuery, setSearchQuery }) {
  return (
    <>
      <div id="searchbar-mainbody">
        <img src={Search} alt="" id="searchbar-icon"/>
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          id="search-searchbar"
          placeholder="Search..."
        />
      </div>
    </>
  )
}