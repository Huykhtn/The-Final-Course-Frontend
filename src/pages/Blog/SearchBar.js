import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import styleSearch from './Blog.module.css';

const SearchBar = ({ posts, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(posts)

        const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    return (
        <div >
            <form className={styleSearch.search} onSubmit={handleSubmit} style={{marginLeft:'14px'}} >
                <input
                    className={styleSearch.search__input}
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                    style={{marginRight:'500px'}}
                />
                <button className={styleSearch.search__button}  >
                    <SearchOutlined />
                </button>
            </form>
        </div>
    )
}

export default SearchBar