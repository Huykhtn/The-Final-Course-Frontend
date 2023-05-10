import React, { useEffect, useState } from 'react'

import { getPosts } from './apiforBlog/api'
import SearchBar from './SearchBar'
import ListPage from './ListPage'


function Blog() {

  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json)
      setSearchResults(json)
    })
  }, [])
  return (
    <>
      <div style={{paddingTop:'150px'}}>
        <SearchBar posts={posts} setSearchResults={setSearchResults} />
      
        <ListPage searchResults={searchResults} />
      </div>
    </>
  )
}

export default Blog