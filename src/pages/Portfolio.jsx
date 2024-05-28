import ProjectCard from "../components/projects/ProjectCard";
import projectList from "../components/projects/projectList";

export default function Portfolio() {
  return (
    <div>
      <h1>Porfolio Page</h1>
      <ProjectCard projectList={projectList} />
    </div>
  );
}
