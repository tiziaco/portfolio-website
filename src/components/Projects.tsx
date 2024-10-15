import { projects } from "@/data/projects"
import { ProjectCard } from "./ui/ProjectCard"


const Projects = () => {
  return (
	<section id='projects'>
		<div className="py-20">
			{/* Section title */}
			<h2 className="heading">
				Here some of my {' '}
				<span className="text-green-500">recent projects</span>
			</h2>

			{/* Project cards */}
			<div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
				{projects.map((project) => (
					<div key={project.id}
						className="lg:min-h-[32.5rem] h-[30rem] flex items-center justify-center sm:w-96 w-[80vw]"
					>

						<ProjectCard
							title={project.title}
							description={project.des}
							image={project.img}
							techStack={project.techStack}
							webLink={project.webLink}
							gitLink={project.gitLink}
						/>
					</div>
					))}
			</div>
		</div>
	</section>
  )
}

export default Projects