import "./FilterBar.css"; 

const FilterBar = (props) => {
    return (
        <div className="filter-bar">
            <div className="filter-bar__tags">
                {props.tags.map((tag, index) => {
                    return <p className="filter-bar__tag" key={`${tag}${index}`} onClick={() => {props.onTagDelete(tag)}}><span className="filter-bar__tag-name">{tag}</span><span className="filter-bar__delete">X</span></p>
                })}
            </div>
            <p className="filter-bar__clear" onClick={props.clearFilterBar}>Clear</p>
        </div> 
    )
}

export default FilterBar; 