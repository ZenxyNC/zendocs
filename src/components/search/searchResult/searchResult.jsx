import "./searchResult.css"
import { useEffect, useState } from "react"
import SearchResultCard from "./searchResult-card"

export default function SearchResult({ searchQuery }) {
  const [searchData, setSearchData] = useState([])


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
    if (!searchQuery) {
      fetchData();
      return
    }


    const filteredData = searchData.filter((item) => {
      return item.title.toLowerCase().includes(searchQuery.toLowerCase())
    })

    if (filteredData.length === 0) {
      setSearchData([])
      return
    }
    setSearchData(filteredData)
  }, [searchQuery])

  return (
    <div id="searchResult-mainbody">
      {searchData.length > 0 ? searchData.map((item, index) => (
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