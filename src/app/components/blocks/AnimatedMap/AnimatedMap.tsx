import { SanityImageType } from "@/app/utils/types";
import React from "react";
import { PortableTextBlock } from "sanity";

interface Props {
  active: boolean;
  title: string;
  description: PortableTextBlock[];
  cover: SanityImageType;
  _type: string;
}

const AnimatedMap = ({ active, title, description, cover, _type }: Props) => {
  return <div>AnimatedMap</div>;
};

export default AnimatedMap;
