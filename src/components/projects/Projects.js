import React, {useEffect, useState} from "react";
import ProjectsStyle from "../../styles/Projects.styled";
import SearchProjects from "./SearchProjects";
import Project from "./Project";
import projects from '../../utils/projects/projects'

const Projects = ({ projectsRef }) => {
  const [projectsFilter, setProjectsFilter] = useState('')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    const filtered = projects.filter(project => {
      let matched = project.keywords.filter(keyword => {
        return keyword.substring(0, projectsFilter.length).toLowerCase() === projectsFilter
      })

      return matched.length > 0
    })

    setFilteredProjects(filtered)
  }, [projectsFilter])

  return (
    <ProjectsStyle>
      <div className="container">
        <div ref={projectsRef} className="ref"></div>
        <header>
          <h1><span>#</span> Projects</h1>
          <SearchProjects setProjectsFilter={setProjectsFilter} />
        </header>

        <main className='projects'>
          {
            filteredProjects.map((project, i) => {
              return <Project key={i} project={project} />
            })
          }
        </main>
      </div>
    </ProjectsStyle>
  );
};

export default Projects;
