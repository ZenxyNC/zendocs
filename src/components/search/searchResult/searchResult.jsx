import "./searchResult.css"
import { useEffect, useState } from "react"
import SearchResultCard from "./searchResult-card"

export default function SearchResult({ searchQuery }) {
  const [searchData, setSearchData] = useState([])
  const [searchResult, setSearchResult] = useState([])


  async function fetchData() {
    await fetch(`${import.meta.env.BASE_URL}searchData/searchData.json`)
      .then((res) => res.json())
      .then((data) => setSearchData(data))
    return
  }
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    setSearchResult(searchData)
  }, [searchData])

  useEffect(() => {
    if (!searchQuery) {
      fetchData();
      return
    }


    const filteredData = searchData.filter((item) => {
      return item.title.toLowerCase().includes(searchQuery.toLowerCase())
    })

    if (filteredData.length === 0) {
      setSearchResult([])
      return
    }
    setSearchResult(filteredData)
  }, [searchQuery])

  return (
    <div id="searchResult-mainbody">
      {searchResult.length > 0 ? searchResult.map((item, index) => (
        <SearchResultCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          param={item.param}
        />
      )) : <div id="searchResult-noresult">No results found</div>}
    </div>
  )
}