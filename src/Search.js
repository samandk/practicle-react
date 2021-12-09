import React, {useState} from 'react'
import useAsyncHook from './CustomHook';

 const Search = () => {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
    const url = `https://www.googleapis.com/books/v1/volumes`;

    const [result, loading, error] =  useAsyncHook(url, query);

    return (
        <div>
            <h1>Search for Books on any Topic</h1>
            <form
             onSubmit={e => {
                e.preventDefault();
                setQuery(search);
              }}
            >
                <input type="text" onChange={(e) => setSearch(e.target.value)}/>
                <input value="Submit" type="submit" />
            </form>
            {
            error ?
            <div> Error in api call - {error}</div>
            :
            loading && query?
                    <div> Loading</div>
                    :
                    result.map((item,index) => <p key={index}>Book Title :{item}</p>)
            }
        </div>
    )
}
export default Search;
