import { PokemonType } from '@/api/types';
import Type from './Type';

export default function Types({ types }: { types: PokemonType[] }) {
  return (
    <div className="inline-flex gap-2">
      {types.map((type, index) => {
        return <Type key={index} name={type.type.name as any} />;
      })}
    </div>
  );
}
