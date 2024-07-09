import {useState} from "react"; 
import "./JobListingsContainer.css"; 
import data from "../data/data.json"; 
import JobListing from "./JobListing";
import FilterBar from "./FilterBar";

const JobListingsContainer = () => {
    const [selectedTags, setSelectedTags] = useState([]); 

    const tagSelectionHandler = (tagName) => {
        if (!selectedTags.includes(tagName)) {
            setSelectedTags((prevState) => {
                return [...prevState, tagName]; 
            })
        }
    }

    const clearFilterBar = () => {
        setSelectedTags([]); 
    }

    const deleteTagHandler = (tag) => {
        const updatedItems = selectedTags.filter(item => item !== tag)

        setSelectedTags(updatedItems); 
    }

    return (
        <main>
            {selectedTags.length > 0 ? <FilterBar tags={selectedTags} clearFilterBar={clearFilterBar} onTagDelete={deleteTagHandler}/> : null}
            <ul className={`jobs-container ${selectedTags.length > 0 ? "jobs-container--with-search-bar" : "jobs-container--without-search-bar"}`}>
                {data.map((item) => {
                    return <JobListing key={item.id} item={item} onTagSelect={tagSelectionHandler} tags={selectedTags}/>
                })}
            </ul>
        </main>
    ); 
}

export default JobListingsContainer; 