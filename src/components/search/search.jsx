import "./search.css"
import { useEffect, useState } from "react"
import Searchbar from "./searchbar"
import SearchResult from "./searchResult/searchResult"

export default function Search({ setGradientwaves }) {
  useEffect(() => {
    setGradientwaves("#5227FF")
  }, [])
  const [searchQuery, setSearchQuery] = useState("")
  return (
    <>
      <div id="search-mainbody">
        <Searchbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <SearchResult
          searchQuery={searchQuery}
        />
      </div>
    </>
  )
}