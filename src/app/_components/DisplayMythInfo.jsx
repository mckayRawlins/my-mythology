export default function DisplayMythInfo(data) {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>Origin: {data.attributes.origin}</p>
      <p>Symbols: {data.attributes.symbols.join(", ")}</p>
      <p>Abode: {data.attributes.abode}</p>
      <p>Powers: {data.attributes.powers.join(", ")}</p>
      <h1>{data.name}'s Family:</h1>
      <p>Parents: {data.attributes.family.parents.join(", ")}</p>
      <p>Siblings: {data.attributes.family.siblings.join(", ")}</p>
      <p>Spouse(s): {data.attributes.family.spouse.join(", ")}</p>
    </div>
  );
}
