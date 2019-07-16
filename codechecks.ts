import { codechecks } from "@codechecks/client";

export default async () => {
  await codechecks.success({
    name: "Hello world!",
    shortDescription: "It's so easy!",
    longDescription: "# Hello! 👋",
  });
};
