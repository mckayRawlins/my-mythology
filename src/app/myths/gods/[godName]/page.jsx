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
    <div className="p-10">
      <div className=" mx-auto text-center w-[60%]">
        <h1>{godData.name}</h1>
        <p>{godData.description}</p>
        <div className="grid grid-cols-2 gap-3">
          <p className="border">
            Origin: <span>{godData.attributes.origin}</span>
          </p>
          <p className="border">
            Symbols: <span>{godData.attributes.symbols.join(", ")}</span>
          </p>
          <p className="border">Abode: {godData.attributes.abode}</p>
          <p className="border">
            Powers: {godData.attributes.powers.join(", ")}
          </p>
        </div>
        <h1>{godData.name}'s Family:</h1>
        <p>Parents: {godData.attributes.family.parents.join(", ")}</p>
        <p>Siblings: {godData.attributes.family.siblings.join(", ")}</p>
        <p>Spouse(s): {godData.attributes.family.spouse.join(", ")}</p>
      </div>
    </div>
  );
}
