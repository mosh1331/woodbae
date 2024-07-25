'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProjectModal from '@/components/projectModal/ProjectModal'
import { projectData } from '@/data/projectsData'
import { MapSharp } from '@mui/icons-material'
import React, { useState } from 'react'

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleOpen = () => setModalOpen(true)
  const handleClose = () => setModalOpen(false)
  return (
    <div className='bg-white min-h-[100vh]'>
       <Header />

      <div className='flex items-center  gap-4  min-h-[70vh] flex-wrap p-8'>
      
          {projectData.map(i => (
          <div
            onClick={() => {
              setSelectedProject(i)
              setModalOpen(true)
            }}
            className='w-[32%] cursor-pointer group/project overflow-hidden relative h-[300px]'
          >
            <img
              src={i.images[0]}
              alt=''
              className='w-full h-full object-cover group-hover/project:scale-110 duration-300 ease-in'
            />
            <p className='text-secondary-text absolute bottom-0 left-0 bg-black text-white w-full opacity-[0.4] text-sm p-2'>
              {i.description}
            </p>

            <p className='text-secondary-text absolute top-0 left-0 bg-black text-white w-full opacity-[0.4] text-sm p-2'>
              <MapSharp /> {i.site}
            </p>
          </div>
        ))}
       
        
      </div>
      <Footer />
      {selectedProject ? (
        <ProjectModal
          open={modalOpen}
          onClose={handleClose}
          project={selectedProject}
        />
      ) : null}

    </div>
  )
}

export default Projects
