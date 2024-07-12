import { projectData } from '@/data/projectsData'
import React, { useEffect, useState } from 'react'
import ProjectModal from './projectModal/ProjectModal';
import { LocationCity, MapSharp } from '@mui/icons-material';

const Section2 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null)

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  // useEffect(() => {
  //   if (selectedProject && !modalOpen ) setModalOpen(true)
  // }, [selectedProject])


  return (
    <div className='bg-[#F4F3F1] p-24 text-secondary-text'>
      <div className="flex items-start w-full mb-8 gap-x-4">

        <div onClick={() => {
          setSelectedProject(projectData[0])
          setModalOpen(true)
        }} className="w-1/2 cursor-pointer group/project overflow-hidden relative">
          <img src={projectData[0].images[0]} alt="" className="w-full h-full object-cover group-hover/project:scale-110 duration-300 ease-in" />
          <p className="text-secondary-text absolute bottom-0 left-0 bg-black text-white w-full opacity-[0.4] text-sm p-2" >{projectData[0].description}</p>
          <p className="text-secondary-text absolute top-0 left-0 bg-black text-white w-full opacity-[0.4] text-sm p-2" ><MapSharp /> {projectData[0].site}</p>
        </div>
        <div className="w-1/2 ">
          <h2 className="text-primary-text text-title mb-12">Our Projects</h2>
          <p className="text-secondary-text text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint rem maxime cum voluptates? Accusantium doloribus perferendis, illum qui tempore laudantium beatae exercitationem odio maiores, quidem deleniti magnam eaque provident.</p>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        {projectData.filter((i,index) => index !== 0 ).map((i )=> <div onClick={() => {
          setSelectedProject(i)
          setModalOpen(true)
        }} className="w-1/3 cursor-pointer group/project overflow-hidden relative h-[300px]">
          <img src={i.images[0]} alt="" className="w-full h-full object-cover group-hover/project:scale-110 duration-300 ease-in" />
          <p className="text-secondary-text absolute bottom-0 left-0 bg-black text-white w-full opacity-[0.4] text-sm p-2" >{i.description}</p>

          <p className="text-secondary-text absolute top-0 left-0 bg-black text-white w-full opacity-[0.4] text-sm p-2" ><MapSharp /> {i.site}</p>

        </div>)}
      </div>
      {selectedProject ? <ProjectModal open={modalOpen} onClose={handleClose} project={selectedProject} /> : null}


    </div>
  )
}

export default Section2