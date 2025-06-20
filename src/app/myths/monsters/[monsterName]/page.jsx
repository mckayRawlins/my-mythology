export default async function Page({ params }) {
  const { monsterName } = await params;
  const res = await fetch(`https://calculator-mx2q.onrender.com/api/monsters`);

  try {
    if (!res.ok) {
      throw new Error(`Failed to fetch data on ${monsterName}`);
    }
  } catch {
    return <div>Failed to fetch data on {monsterName}</div>;
  }

  const data = await res.json();

  const monsterData = data.results.find(
    (monster) => monster.name.toLowerCase() === monsterName
  );

  return (
    <div>
      <h1>{monsterData.name}</h1>
      <p>{monsterData.description}</p>
    </div>
  );
}
