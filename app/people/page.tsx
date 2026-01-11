import PersonCard from "@/components/PersonCard";
import { client } from "@/sanity/lib/client";
import { peopleQuery, alumniQuery } from "@/sanity/lib/queries";
import { people as fallbackPeople, alumni as fallbackAlumni } from "@/lib/data";

export const metadata = {
  title: "People | SHIRE Lab",
  description: "Meet the current team and alumni of the SHIRE Lab at the University of Miami.",
};

export const revalidate = 60;

async function getPeople() {
  try {
    const [current, alum] = await Promise.all([
      client.fetch(peopleQuery),
      client.fetch(alumniQuery),
    ]);

    if (current && current.length > 0) {
      const mapPerson = (p: any) => ({
        id: p._id,
        name: p.name,
        role: p.role,
        degree: p.degree,
        description: p.description,
        email: p.email,
        isCurrent: p.isCurrent,
      });
      return {
        people: current.map(mapPerson),
        alumni: alum.map(mapPerson),
      };
    }
    return { people: fallbackPeople, alumni: fallbackAlumni };
  } catch {
    return { people: fallbackPeople, alumni: fallbackAlumni };
  }
}

export default async function PeoplePage() {
  const { people, alumni } = await getPeople();
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">People</h1>
          <p className="text-lg text-gray-600">
            Meet our current team members and alumni who have contributed to the SHIRE Lab.
          </p>
        </div>

        {/* Current Team */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Team</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {people.map((person: any) => (
              <PersonCard key={person.id} person={person} variant="current" />
            ))}
          </div>
        </section>

        {/* Join Us */}
        <section className="mb-16 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-4">
            We welcome students and collaborators at all career stages. If you have experience
            in geospatial technology, surveys, quantitative or qualitative methods, or data
            science, we'd love to hear from you.
          </p>
          <a
            href="mailto:stoler@miami.edu"
            className="inline-flex items-center bg-[#0d7377] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#095456] transition-colors"
          >
            Get in Touch
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </section>

        {/* Alumni */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Alumni</h2>
          <p className="text-gray-600 mb-6">
            Our alumni have gone on to medical school, graduate programs, and careers
            in public health, research, and beyond. Many co-authored peer-reviewed
            research as students.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {alumni.map((person: any) => (
              <PersonCard key={person.id} person={person} variant="alumni" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
