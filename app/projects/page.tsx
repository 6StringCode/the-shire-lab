import ProjectCard from "@/components/ProjectCard";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import { projects as fallbackProjects } from "@/lib/data";

export const metadata = {
  title: "Projects | SHIRE Lab",
  description: "Research projects at the SHIRE Lab focusing on environmental health, water insecurity, and health disparities.",
};

export const revalidate = 60;

async function getProjects() {
  try {
    const projects = await client.fetch(projectsQuery);
    if (projects && projects.length > 0) {
      return projects.map((p: any) => ({
        id: p._id,
        title: p.title,
        description: p.description,
        partners: p.partners,
        focusAreas: p.focusAreas,
        isActive: p.isActive,
      }));
    }
    return fallbackProjects;
  } catch {
    return fallbackProjects;
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();
  const activeProjects = projects.filter((p: any) => p.isActive);
  const pastProjects = projects.filter((p: any) => !p.isActive);

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Research Projects</h1>
          <p className="text-lg text-gray-600">
            Our research spans water insecurity, environmental epidemiology, health disparities,
            and the social determinants of health across local and global contexts.
          </p>
        </div>

        {/* Active Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {activeProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Past Projects */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
