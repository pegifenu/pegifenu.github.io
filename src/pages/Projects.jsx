import PageNav from "../components/PageNav";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div>
      <PageNav />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-10 py-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;