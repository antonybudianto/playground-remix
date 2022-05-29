import { Suspense } from "react";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import PokemonList from "~/components/PokemonList";
import type { Data } from "~/types/data";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  try {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10"
    );
    if (!res.ok) {
      throw Error("fetch error");
    }
    const jsonData = await res.json();
    return json(jsonData.results);
  } catch (e) {
    console.error(e);
    return json([]);
  }
};

export default function Index() {
  const products = useLoaderData<Data[]>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PokemonList products={products} />
      </Suspense>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
