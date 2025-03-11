import { groq } from "next-sanity";

export const projects = groq`*[_type == "project"] {
_id, title, "slug": slug.current, "image": image.asset -> url, url, content
}`;

export const project = (
  slug: string
) => groq`*[_type == "project" && slug.current == "${slug}"][0] {
	_id, title, "slug": slug.current, image, url, content
	}`;

export const pages = groq`*[_type == "page"] {
		_id, title, "slug": slug.current, content, seo
		}`;

export const page = (slug?: string) => {
  const query = slug ? `slug.current == "${slug}"` : "!defined(slug)";
  return groq`*[_type == "page" && ${query}][0] {
			_id, title, "slug": slug.current, content, seo,
			"blocks": blocks.blocks
			}`;
};
