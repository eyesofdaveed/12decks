import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "lz8cdqcy",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
