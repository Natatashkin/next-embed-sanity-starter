import { defineType, defineField } from "sanity";

export default defineType({
  type: "object",
  name: "seo",
  title: "SEO",
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Site title",
    }),
    defineField({
      type: "text",
      name: "description",
      title: "Site description",
    }),
    defineField({
      type: "string",
      name: "site_name",
      description: "Site share name",
      title: "Site Name",
    }),
    defineField({
      type: "text",
      name: "og_description",
      title: "Social share description",
    }),
    defineField({
      type: "string",
      title: "Page Title",
      name: "og_title",
      description:
        "Set the title Open Graph should use. In most situations, this should be different from the value of the title prop",
    }),
    defineField({
      type: "image",
      title: "Image",
      name: "og_image",
      description: "Image that should be used in social media previews",
    }),
  ],
});
