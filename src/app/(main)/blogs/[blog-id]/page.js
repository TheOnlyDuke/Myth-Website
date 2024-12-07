export default function BlogsPage({ params }) {
  return (
    <main style={{ flex: 1 }}>
      <h1>In Development {params["blog-id"]}</h1>
    </main>
  );
}
