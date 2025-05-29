export default async function Page({ params }) {
  const { titanName } = await params;
  const res = await fetch(`http://localhost:3000/api/titans`);

  try {
    if (!res.ok) {
      throw new Error(`Failed to fetch data on ${titanName}`);
    }
  } catch {
    return <div>Failed to fetch data on {titanName}</div>;
  }

  const data = await res.json();

  const titanData = data.results.find(
    (titan) => titan.name.toLowerCase() === titanName
  );

  return (
    <div>
      <h1>{titanData.name}</h1>
      <p>{titanData.description}</p>
    </div>
  );
}
