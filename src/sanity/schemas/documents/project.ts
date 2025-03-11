import { defineType, defineField, defineArrayMember } from "sanity";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export default defineType({
  name: "project",
  title: "Projects",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: "active",
      title: "is active?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "cover",
      title: "Cover",
      type: "coverType",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    orderRankField({ type: "page" }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "active",
      media: "cover.desktop.image",
    },
    prepare(selection) {
      const { title, media, subtitle } = selection;
      return {
        title: title ?? "no title",
        subtitle: !subtitle ? "not active " : "",
        media,
      };
    },
  },
});
