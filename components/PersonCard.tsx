interface Person {
  id: string;
  name: string;
  role: string;
  degree?: string;
  description?: string;
  email?: string;
  isCurrent: boolean;
}

interface PersonCardProps {
  person: Person;
  variant?: "current" | "alumni";
}

export default function PersonCard({
  person,
  variant = "current",
}: PersonCardProps) {
  const initials = person.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  if (variant === "alumni") {
    return (
      <div className="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-sm transition-shadow">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-medium text-gray-600">{initials}</span>
          </div>
          <div className="min-w-0">
            <h3 className="font-medium text-gray-900 truncate">{person.name}</h3>
            {person.degree && (
              <p className="text-sm text-gray-500 truncate">{person.degree}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-gradient-to-br from-[#0d7377] to-[#095456] p-6 text-center">
        <div className="w-20 h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{initials}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 text-center">
          {person.name}
        </h3>
        <p className="text-[#0d7377] text-sm text-center mt-1">{person.role}</p>
        {person.degree && (
          <p className="text-gray-500 text-sm text-center mt-1">
            {person.degree}
          </p>
        )}
        {person.description && (
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            {person.description}
          </p>
        )}
        {person.email && (
          <a
            href={`mailto:${person.email}`}
            className="block text-center mt-4 text-[#0d7377] hover:underline text-sm"
          >
            {person.email}
          </a>
        )}
      </div>
    </div>
  );
}

export type { Person };
