import { ISliderItem } from "@/app/utils/types";
import React from "react";
import { PortableTextBlock } from "sanity";

interface Props {
  active: boolean;
  title: string;
  description: PortableTextBlock[];
  items: ISliderItem[];
  _type: string;
}

const ProjectsSlider = ({
  active,
  title,
  description,
  items,
  _type,
}: Props) => {
  return <div>ProjectsSlider</div>;
};

export default ProjectsSlider;
