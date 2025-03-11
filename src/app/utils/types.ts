import { PortableTextBlock } from "sanity";

export interface ILink {
  href: string;
  title: string;
  isExternal: boolean;
}

export interface IDynamicBlock {
  _type: string;
  [key: string]: any;
}

export type SanityImageType = {
  asset: {
    _ref?: string;
    _id?: string;
  };
};

export interface IProject {
  _id: string;
  title: string;
  slug: string;
  image: SanityImageType;
  url: string;
  content: PortableTextBlock[];
}

export interface IPage {
  _id: string;
  title: string;
  slug: string;
  content: PortableTextBlock[];
  blocks: any;
  seo: any;
}

export interface ISliderItemContent {
  title: string;
  description: PortableTextBlock[];
  hasLink: boolean;
  link: ILink;
}

export interface ISliderItem {
  cover: string;
  hasContent: boolean;
  content: ISliderItemContent;
}
