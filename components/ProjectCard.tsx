interface Project {
  id: string;
  title: string;
  description: string;
  partners?: string[];
  focusAreas?: string[];
  isActive: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-4">
          {project.title}
        </h3>
        {project.isActive && (
          <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full flex-shrink-0">
            Active
          </span>
        )}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>
      {project.partners && project.partners.length > 0 && (
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Partners
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.partners.map((partner) => (
              <span
                key={partner}
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      )}
      {project.focusAreas && project.focusAreas.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Focus Areas
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.focusAreas.map((area) => (
              <span
                key={area}
                className="bg-teal-50 text-[#0d7377] text-xs px-2 py-1 rounded"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export type { Project };
