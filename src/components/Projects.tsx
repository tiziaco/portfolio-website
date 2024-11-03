import { projects } from "@/data/projects"
import { ProjectCard } from "./ui/ProjectCard"
import { BentoGrid } from "./ui/BentoGrid"
import { ShiftedGrid } from "./ui/ShiftedGrid"


const Projects = () => {
  return (
	<section id="projects">
		<div className="py-20">
			<h2 className="heading">
			Here are some of my{' '}
			<span className="text-green-500 drop-shadow-3xl">recent projects</span>
			</h2>

			{/* Project cards */}
			<ShiftedGrid className="md:p-0 lg:p-10 mt-10">
			{projects.map((project) => (
				<ProjectCard
				key={project.id}
				title={project.title}
				description={project.des}
				image={project.img}
				techStack={project.techStack}
				webLink={project.webLink}
				gitLink={project.gitLink}
				/>
			))}
			</ShiftedGrid>
		</div>
	</section>
  )
}

export default Projects