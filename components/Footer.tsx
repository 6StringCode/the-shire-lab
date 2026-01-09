import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Lab Info */}
          <div>
            <h3 className="text-xl font-bold text-[#14b8a6] mb-4">SHIRE Lab</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Spatial Health Inequities & Resource Environment Lab
            </p>
            <p className="text-gray-400 text-sm mt-2">
              University of Miami<br />
              Department of Geography &<br />
              Sustainable Development
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.as.miami.edu/geography/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#14b8a6] transition-colors text-sm"
                >
                  Geography & Sustainable Development →
                </Link>
              </li>
              <li>
                <Link
                  href="https://hwise-rcn.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#14b8a6] transition-colors text-sm"
                >
                  HWISE-RCN Network →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm mb-2">
              <a
                href="mailto:stoler@miami.edu"
                className="hover:text-[#14b8a6] transition-colors"
              >
                stoler@miami.edu
              </a>
            </p>
            <p className="text-gray-400 text-sm mb-4">305-284-6692</p>
            <SocialLinks />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SHIRE Lab, University of Miami. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
