import DefaultLayout from "~/components/DefaultLayout";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Explore - MangaHaven" },
    { name: "description", content: "Read manga online" },
  ];
}

export default function Home() {
  return <DefaultLayout />;
}
