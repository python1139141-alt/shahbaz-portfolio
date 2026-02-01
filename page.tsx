// This is a mock data source. In a real app, you might fetch this
// from a headless CMS, a database, or a local JSON file.
const portfolioItems = [
  { slug: "project-alpha", title: "Project Alpha", content: "Details about project Alpha..." },
  { slug: "project-beta", title: "Project Beta", content: "Details about project Beta..." },
  { slug: "venus-nextjs", title: "Venus Next.js Theme", content: "Details about the Venus theme..." },
];

// This function tells Next.js which slugs to pre-render at build time.
export async function generateStaticParams() {
  // We return an array of objects, where each object has a `slug` property
  // matching the dynamic segment `[slug]`.
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

// This is your page component.
export default function PortfolioPage({ params }: { params: { slug: string } }) {
  // Find the specific portfolio item based on the slug from the URL.
  const item = portfolioItems.find((p) => p.slug === params.slug);

  if (!item) {
    // Optionally, handle cases where the slug doesn't match any item.
    // In a static export, this would typically lead to a 404.
    return <div>Project not found.</div>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.content}</p>
    </div>
  );
}
