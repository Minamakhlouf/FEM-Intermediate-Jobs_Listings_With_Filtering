import "./Tag.css"; 

const Tag = (props) => {
    return (
        <button className="job-posting__tag" onClick={() => {props.onTagSelect(props.item)}}>{props.item}</button>
    )
}

export default Tag; 