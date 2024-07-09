import "./JobListing.css"; 
import Tag from "./Tag"; 

const JobListing = (props) => {
    const {item} = props; 
    const tagArray = [item.role, item.level, ...item.languages, ...item.tools]; 
    let tagsMatched = 0; 

    if (props.tags.length > 0) {
        props.tags.forEach((element) => {
            if (tagArray.includes(element)) {
                tagsMatched++; 
            }
        })
    }

    return (
        <li className={`${props.tags.length === tagsMatched ? "job-posting" : "job-posting--filtered-out"}`}>
            {props.item.featured && <div className="job-posting__overlay"></div>}
            <img className="job-posting__logo" src={item.logo} alt={`${item.company} logo`}/>
            <div>
                <div className="job-posting__title-container">
                    <span>{item.company}</span>
                    <div className="job-posting__new-feature">
                        {item.new && <span className="job-posting__new">NEW!</span>}
                        {item.featured && <span className="job-posting__feature">FEATURED</span>}
                    </div>
                </div>
                <p className="job-posting__position">{item.position}</p>
                <p className="job-posting__posting-info">{item.postedAt} &bull; {item.contract} &bull; {item.location}</p>
            </div>
            <hr></hr>
            <div className="job-posting__tag-container">
                {tagArray.map((item, index) => {
                    return <Tag key={`${item}${index}`} item={item} onTagSelect={props.onTagSelect}/>
                })}
            </div>
        </li>
    )
}

export default JobListing; 