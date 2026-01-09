interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  link?: string;
}

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <time className="text-sm text-[#0d7377] font-medium">{formattedDate}</time>
      <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-3">
        {item.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {item.description}
      </p>
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#0d7377] hover:text-[#095456] font-medium text-sm transition-colors"
        >
          Read more
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      )}
    </article>
  );
}

export type { NewsItem };
