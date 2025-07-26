import { useState, useEffect } from "react";
import { Dialog } from "radix-ui";
import { motion, AnimatePresence } from "motion/react";

import ProjectNav from "../components/ProjectNav";
import ProjectCard from "../components/ProjectCard";
import ProjectDialog from "../components/ProjectDialog";

import projects from "../data/projects";

import { CategoryEnum, SortEnum, TagEnum } from "../constants";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    category: CategoryEnum.ALL,
    tags: [],
    sort: SortEnum.TOP,
  });
  const [displayedProjects, setDisplayedProjects] = useState(projects);

  useEffect(() => {
    let filtered = [...projects];

    // Filter by category
    if (filters.category !== CategoryEnum.ALL) {
      filtered = filtered.filter(
        (project) => project.category === filters.category,
      );
    }

    // Filter by tags
    console.log(filters.tags);

    if (filters.tags.length > 0) {
      filtered = filtered.filter((project) =>
        filters.tags.some((tag) => project.tags.includes(tag)),
      );
    }

    // Filter by search
    const cleanedQuery = filters.search
      .trim()
      .replace(/\s+/g, "")
      .toLowerCase();
    if (cleanedQuery !== "") {
      filtered = filtered.filter(
        (project) =>
          project.title
            .trim()
            .replace(/\s+/g, "")
            .toLowerCase()
            .includes(cleanedQuery) ||
          project.description
            .trim()
            .replace(/\s+/g, "")
            .toLowerCase()
            .includes(cleanedQuery),
      );
    }

    // Sort results
    if (filters.sort === SortEnum.RECENT) {
      filtered.sort((a, b) => new Date(b.dateEnded) - new Date(a.dateEnded));
    } else if (filters.sort === SortEnum.OLDEST) {
      filtered.sort((a, b) => new Date(a.dateEnded) - new Date(b.dateEnded));
    } else {
      // Default sort (original order)
      filtered.sort((a, b) => {
        const indexA = projects.findIndex((p) => p.title === a.title);
        const indexB = projects.findIndex((p) => p.title === b.title);
        return indexA - indexB;
      });
    }

    if (JSON.stringify(filtered) !== JSON.stringify(displayedProjects)) {
      setDisplayedProjects(filtered);
    }
  }, [projects, filters]);

  return (
    <div>
      <ProjectNav filters={filters} setFilters={setFilters} />

      <Dialog.Root>
        <div className="z-10 mx-10">
          <div className="mx-auto grid max-w-300 grid-cols-1 gap-5 py-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {console.log(filters)}
              {displayedProjects.map((project, index) => (
                <Dialog.Trigger asChild key={project.title}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ y: -5 }}
                  >
                    <ProjectCard
                      key={index}
                      image={project.image}
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                    />
                  </motion.div>
                </Dialog.Trigger>
              ))}
              {displayedProjects.length === 0 && (
                <motion.div
                  key="no-projects"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-white"
                >
                  No projects were found under this filter.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {selectedProject && <ProjectDialog selectedProject={selectedProject} />}
      </Dialog.Root>
    </div>
  );
};

export default Projects;
