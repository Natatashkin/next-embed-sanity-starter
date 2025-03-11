import { ISliderItem } from "@/app/utils/types";
import { PortableTextBlock } from "sanity";
import React from "react";

interface Props {
  active: boolean;
  title: string;
  description: PortableTextBlock[];
  items: ISliderItem[];
  _type: string;
}

const HeroSlider = ({ active, title, description, items, _type }: Props) => {
  return <div>HeroSlider</div>;
};

export default HeroSlider;
