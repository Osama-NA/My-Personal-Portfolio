import React from 'react'

const Project = ({project}) => {
  return (
    <div className='project'>
        <img 
            src={project.image} 
            alt={`Osama Haj-Ali portfolio ${project.title} project`}
            draggable={false}
        />

        <article className='project-info'>
            <h1 className='title'>{project.title}</h1>
            <p className='description'>{project.description}</p>
            <h3 className='tech'>Tech: {project.tech}</h3>
            <div className='buttons'>
                <a className='repo' href={project.repo} target='_blank' rel="noreferrer">Repo</a>
                <a className='demo' href={project.link} target='_blank' rel="noreferrer">Demo</a>
            </div>
        </article>
    </div>
  )
}

export default Project