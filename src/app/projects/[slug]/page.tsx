import { IProject } from "@/app/utils/types";
import { project as query } from "@/sanity/utils/queries";
import fetchSanityData from "@/sanity/utils/fetchSanityData";
import SanityImage from "@/app/components/shared/SanityImage/SanityImage";
import RichEditor from "@/app/components/shared/RichEditor/RichEditor";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Project({ params }: Props) {
  const { slug } = await params;

  const project = await fetchSanityData<IProject>(query(slug));

  return (
    <div>
      <h1>{project.title}</h1>
      <RichEditor value={project.content} />
      <SanityImage src={project.image} alt="Image" />
    </div>
  );
}
