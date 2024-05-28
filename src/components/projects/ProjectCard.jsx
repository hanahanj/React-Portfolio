// import cat from "../../assets/cat"

export default function ProjectCard({projectList}){
    console.log(projectList)
    return (
        <ul className="list-group">
        {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
        {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
        {projectList.map(item => (
          <li className="list-group-item" key={item.id}>
            {item.name}
            <img src={item.image}></img>
            {item.description}
            <p>
            <a href="{item.link}" target= '_blank'>
            Project Link
            </a>
            </p>
            <p>
            <a href="{item.repo}" target= '_blank'>
            Project Repo
            </a>
            </p>
           
          </li>
        ))}
      </ul>
    )
}