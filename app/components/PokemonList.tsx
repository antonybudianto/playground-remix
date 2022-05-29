import type { Data } from "~/types/data";

const PokemonList = ({ products }: { products: Data[] }) => {
  return (
    <div>
      <div>Pokemon:</div>
      <div>
        {products.map((p: Data, i: number) => (
          <div key={i}>{p.name}</div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
