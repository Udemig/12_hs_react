// /docs/123/123/123
// [...slug] (catch-all segments) sayesinde url'de 1den fazla parametre olaiblmesini sağladık
// urldeki parametreleri array olarak alır

const Docs = async ({ params }) => {
  const { slug } = await params;

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-5xl">
      <div className="flex flex-col gap-5">
        {params.slug.map((slug) => (
          <div key={slug}>{slug}</div>
        ))}
      </div>
    </div>
  );
};

export default Docs;
