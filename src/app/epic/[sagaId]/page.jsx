import Link from "next/link";
import SagaFetcher from "../../_components/SagaFetcher";

export default async function Page({ params }) {
  const { sagaId } = await params;

  return (
    <div className="relative">
      <div className="absolute rounded-full w-fit px-3 mx-2 my-5 text-white font-serif bg-slate-300/20 border border-white/80 hover:bg-slate-300/50">
        <Link href="/epic">Saga List</Link>
      </div>
      <SagaFetcher sagaId={sagaId} />
    </div>
  );
}
