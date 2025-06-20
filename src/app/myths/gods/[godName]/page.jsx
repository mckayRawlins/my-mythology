import DisplayMythInfo from "@/app/_components/DisplayMythInfo";

export default async function Page({ params }) {
  const { godName } = await params;
  const res = await fetch(`https://calculator-mx2q.onrender.com/api/gods`);

  try {
    if (!res.ok) {
      throw new Error(`Failed to fetch data on ${godName}`);
    }
  } catch {
    return <div>Failed to fetch data on {godName}</div>;
  }

  const data = await res.json();

  const godData = data.results.find(
    (god) => god.name.toLowerCase() === godName
  );
  console.log(godData);

  return (
    <div>
      <h1>{godData.name}</h1>
      <p>{godData.description}</p>
      <p>Origin: {godData.attributes.origin}</p>
      <p>Symbols: {godData.attributes.symbols.join(", ")}</p>
      <p>Abode: {godData.attributes.abode}</p>
      <p>Powers: {godData.attributes.powers.join(", ")}</p>
      <h1>{godData.name}'s Family:</h1>
      <p>Parents: {godData.attributes.family.parents.join(", ")}</p>
      <p>Siblings: {godData.attributes.family.siblings.join(", ")}</p>
      <p>Spouse(s): {godData.attributes.family.spouse.join(", ")}</p>
    </div>
  );
}
