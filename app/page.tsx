import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d7377] to-[#095456] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SHIRE Lab
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl leading-relaxed">
            Spatial Health Inequities & Resource Environment
          </p>
          <p className="text-lg text-teal-200 mt-4 max-w-2xl">
            Led by Dr. Justin Stoler at the University of Miami, we study global
            environmental health disparities.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="bg-white text-[#0d7377] px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
            >
              View Our Research
            </Link>
            <Link
              href="/people"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About the Lab
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The SHIRE Lab studies how environmental and social factors shape
                health outcomes across different populations and places. Our research
                spans water insecurity, infectious diseases, environmental
                epidemiology, and health disparities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We train health professionals and support interdisciplinary
                projects to understand and address global health challenges.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you are a prospective student, collaborator, or member of the
                media, we would love to hear from you.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Research Focus Areas
              </h3>
              <ul className="space-y-3">
                {[
                  "Water Insecurity & WASH",
                  "Environmental Epidemiology",
                  "Health Disparities",
                  "Climate & Health",
                  "Geospatial Health Analysis",
                  "Social Determinants of Health",
                ].map((area) => (
                  <li key={area} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#0d7377] rounded-full mr-3" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Investigator Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-[#0d7377] to-[#095456] p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold">JS</span>
                  </div>
                  <h3 className="text-xl font-bold">Justin Stoler</h3>
                  <p className="text-teal-200 text-sm">Ph.D., M.P.H.</p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Principal Investigator
                </h2>
                <p className="text-[#0d7377] font-medium mb-4">
                  Professor, Geography & Sustainable Development, and Public Health
                  Sciences
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dr. Stoler is a former management consultant turned researcher
                  focusing on health disparities, social and environmental
                  epidemiology, and global health. He has over a decade of
                  experience studying drinking water and infectious diseases in
                  Ghana.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  He co-leads the HWISE-RCN, an interdisciplinary research
                  coordination network focused on household water insecurity
                  experiences around the world.
                </p>
                <div className="flex items-center gap-6">
                  <a
                    href="mailto:stoler@miami.edu"
                    className="text-[#0d7377] hover:underline font-medium"
                  >
                    stoler@miami.edu
                  </a>
                  <SocialLinks iconSize="sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Interested in collaboration, joining our lab, or learning more about
            our research? We'd love to hear from you.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-[#0d7377]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#0d7377]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:stoler@miami.edu"
                className="text-[#0d7377] hover:underline text-sm"
              >
                stoler@miami.edu
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-[#0d7377]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#0d7377]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">305-284-6692</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-[#0d7377]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#0d7377]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600 text-sm">
                University of Miami<br />
                Coral Gables, FL
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
