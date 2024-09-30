import { projects } from "@/data"
import { ProjectCard } from "./ui/ProjectCard"


const Projects = () => {
  return (
	<section id='projects'>
		<div className="py-20">
			<h1 className="heading">
				Here some of my {' '}
				<span className="text-purple-300">recent projects</span>
			</h1>
			<div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
				{projects.map((project) => (
					<div key={project.id}
						className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
					>

						<ProjectCard
							title={project.title}
							description={project.des}
							image={project.img}
							techStack={project.techStack}
						/>
					</div>
					))}
			</div>
		</div>
	</section>
  )
}

export default Projects