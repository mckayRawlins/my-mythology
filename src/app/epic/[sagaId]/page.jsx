import SagaFetcher from "../../_components/SagaFetcher";

export default async function Page({ params }) {
  const { sagaId } = await params;

  return <SagaFetcher sagaId={sagaId} />;
}
