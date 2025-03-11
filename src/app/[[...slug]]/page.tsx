import fetchSanityData from "@/sanity/utils/fetchSanityData";
import { notFound } from "next/navigation";
import { page as query } from "@/sanity/utils/queries";
import { IDynamicBlock, IPage } from "@/app/utils/types";
import RichEditor from "@/app/components/shared/RichEditor/RichEditor";
import BlockBuilder from "@/app/components/shared/BlockBuilder/BlockBuilder";

// Personal Website Tutorial with Next.js 13, Sanity.io, TailwindCSS, and TypeScript
// https://www.youtube.com/watch?v=OcTPaUfay5I&t=4103s&ab_channel=freeCodeCamp.org

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const pageSlug = slug?.join("/") || "";
  let page: IPage;

  if (!pageSlug) {
    page = await fetchSanityData<IPage>(query());
  } else {
    page = await fetchSanityData<IPage>(query(pageSlug));
  }

  if (!page) {
    notFound();
  }
  // console.dir(page, { depth: null });

  return (
    <div>
      <h2>{page.title}</h2>
      <RichEditor value={page.content} />
      {page.blocks?.map((block: IDynamicBlock) => {
        return <BlockBuilder block={block} key={block._key.slice(0, -5)} />;
      })}
    </div>
  );
}
