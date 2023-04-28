import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";
import { myTheme } from "./sanity/theme";
import { StudioLogo, StudioNavbar } from "./components";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const config = defineConfig({
  projectId,
  dataset,
  title: "Keezy Accessories Studio",
  apiVersion,
  basePath: "/studio",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
  theme: myTheme,
  studio: {
    components: {
      logo: StudioLogo,
      navbar: StudioNavbar,
    },
  },
});

export default config;
