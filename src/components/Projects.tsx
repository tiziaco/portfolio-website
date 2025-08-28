import { projects } from "@/data/projects"
import { ProjectCard } from "./ui/ProjectCard"
import { ShiftedGrid } from "./ui/ShiftedGrid"
import HighlightText from "./ui/HighlightText"


const Projects = () => {
  return (
	<section id="projects">
		<div className="py-20">


			<HighlightText as="h2"
				className="heading"
				highlightIndices={[5, 6]}
			>
				Here are some of my recent projects
			</HighlightText>


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