import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "a3b46f8a-5e65-458d-a49b-463f682c5fb6", // Get this from tina.io
  token: "4dabbb2db2c27d4cd6eeb3158367cb27bdb90366", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        label: "Blog Post (en)",
        name: "blog_post__en_",
        path: "exampleSite/content/english/blog",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
          {
            type: "string",
            name: "type",
            label: "type",
          },
          {
            type: "string",
            name: "description",
            label: "meta description",
          },
        ],
      },
      {
        label: "Blog Post (de)",
        name: "blog_post__de_",
        path: "exampleSite/content/deutsch/blog",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "image",
            name: "image",
            label: "image",
          },
          {
            type: "string",
            name: "type",
            label: "type",
          },
          {
            type: "string",
            name: "description",
            label: "meta description",
          },
        ],
      },
      {
        label: "All Pages",
        name: "all_pages",
        path: "exampleSite/content",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "subtitle",
            label: "subtitle",
          },
          {
            type: "string",
            name: "description",
            label: "meta description",
          },
        ],
      },
    ],
  },
});
