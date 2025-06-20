import DisplayMythInfo from "@/app/_components/DisplayMythInfo";

export default async function Page({ params }) {
  const { godName } = await params;
  const res = await fetch(`http://calculator-mx2q.onrender.com/api/gods`);

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

  return <DisplayMythInfo data={godData} />;
}
