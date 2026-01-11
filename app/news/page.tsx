import NewsCard from "@/components/NewsCard";
import { client } from "@/sanity/lib/client";
import { newsQuery } from "@/sanity/lib/queries";
import { newsItems as fallbackNews } from "@/lib/data";

export const metadata = {
  title: "News | SHIRE Lab",
  description: "Latest research updates and news from the SHIRE Lab at the University of Miami.",
};

export const revalidate = 60; // Revalidate every 60 seconds

async function getNews() {
  try {
    const news = await client.fetch(newsQuery);
    if (news && news.length > 0) {
      return news.map((item: any) => ({
        id: item._id,
        date: item.date,
        title: item.title,
        description: item.description,
        link: item.link,
      }));
    }
    return fallbackNews;
  } catch {
    return fallbackNews;
  }
}

export default async function NewsPage() {
  const newsData = await getNews();
  const sortedNews = [...newsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">News</h1>
          <p className="text-lg text-gray-600">
            Stay updated with our latest research publications, announcements, and lab activities.
          </p>
        </div>

        {/* News Grid */}
        <div className="space-y-6">
          {sortedNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
