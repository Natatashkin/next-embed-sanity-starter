import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import structure from "./src/sanity/deskStructure";
// https://www.sanity.io/docs/structure-tool

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_VERSION!;

const config = defineConfig({
  projectId,
  dataset,
  title: "Next-Studio project",
  apiVersion,
  basePath: "/admin",
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

export default config;
