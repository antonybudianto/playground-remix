import type { FC } from "react";
import type { Data } from "~/types/data";

const PokemonList: FC<{ products: Data[] }> = ({ products }) => {
  return (
    <div>
      <strong>Pokemon:</strong>
      <div>
        {products.map((p: Data, i: number) => (
          <div key={i}>{p.name}</div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
