import "./search.css"
import { useEffect, useState } from "react"
import Searchbar from "./searchbar"
import SearchResult from "./searchResult/searchResult"

export default function Search({ setFaultyTerminal }) {
  useEffect(() => {
    setFaultyTerminal("#a7ef9e")
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