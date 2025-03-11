import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "projectsSliderBlock",
  title: "Projects slider block",
  type: "object",
  fields: [
    defineField({
      name: "active",
      title: "is active?",
      type: "boolean",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "richTextType",
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        defineArrayMember({
          name: "item",
          title: "Item",
          type: "object",
          fields: [
            defineField({
              name: "project",
              title: "Project",
              type: "reference",
              to: [{ type: "project" }],
              options: {
                filter: "active == $active",
                filterParams: { active: true },
              },
            }),
            defineField({
              title: "Has content?",
              name: "hasContent",
              type: "boolean",
              initialValue: false,
            }),
            defineField({
              name: "content",
              title: "Content",
              type: "object",
              hidden: ({ parent }) => !parent || !parent.hasContent,
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "description",
                  type: "text",
                }),
                defineField({
                  name: "hasLink",
                  title: "Has link?",
                  type: "boolean",
                  initialValue: false,
                }),
                defineField({
                  name: "link",
                  title: "Link",
                  type: "linkType",
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: "project.title",
              media: "project.cover.desktop.image",
            },
            prepare(selection) {
              const { title, media } = selection;
              return {
                title: title ?? "no title",
                media,
              };
            },
          },
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Projects slider block",
      };
    },
  },
});

// defineField({
//   name: "item",
//   title: "Item",
//   type: "object",
//   fields: [
//     defineField({
//       name: "project",
//       title: "Project",
//       type: "array",
//       of: [
//         {
//           type: "reference",
//           to: [{ type: "project" }],
//           options: {
//             filter: "active == $active",
//             filterParams: { active: true },
//           },
//         },
//       ],
//     }),
//     defineField({
//       title: "Has content?",
//       name: "hasContent",
//       type: "boolean",

//     }),
//     defineField({
//       name: "content",
//       title: "Content",
//       type: "object",
//       fields: [
//         defineField({
//           name: "title",
//           title: "Title",
//           type: "string",
//         }),
//         defineField({
//           name: "description",
//           title: "description",
//           type: "text",
//         }),
//         defineField({
//           name: "hasLink",
//           title: "Has link?",
//           type: "boolean",
//         }),
//         defineField({
//           name: "link",
//           title: "Link",
//           type: "linkType",
//         }),
//       ],
//     }),
//   ],
//   preview: {
//     select: {
//       title: "title",
//     },
//     prepare(selection) {
//       const { title } = selection;
//       return {
//         title: title ?? "no title",
//       };
//     },
//   },
// }),
// ],
// }),
