export default async function Page({ params }) {
  const { heroName } = await params;
  const res = await fetch(`https://calculator-mx2q.onrender.com/api/heroes`);

  try {
    if (!res.ok) {
      throw new Error(`Failed to fetch data on ${heroName}`);
    }
  } catch {
    return <div>Failed to fetch data on {heroName}</div>;
  }

  const data = await res.json();

  const heroData = data.results.find(
    (hero) => hero.name.toLowerCase() === heroName
  );

  return (
    <div>
      <h1>{heroData.name}</h1>
      <p>{heroData.description}</p>
      <p>Origin: {heroData.attributes.origin}</p>
      <p>Symbols: {heroData.attributes.symbols.join(", ")}</p>
      <p>Abode: {heroData.attributes.abode}</p>
      <p>Powers: {heroData.attributes.powers.join(", ")}</p>
      <h1>{heroData.name}'s Family:</h1>
      <p>Parents: {heroData.attributes.family.parents.join(", ")}</p>
      <p>Siblings: {heroData.attributes.family.siblings.join(", ")}</p>
      <p>Spouse(s): {heroData.attributes.family.spouse.join(", ")}</p>
    </div>
  );
}
