import Link from 'next/link'

const typeColors = {
  normal: 'bg-gray-300 text-gray-800',
  fire: 'bg-red-500 text-white',
  water: 'bg-blue-500 text-white',
  grass: 'bg-green-500 text-white',
  electric: 'bg-yellow-400 text-black',
  ice: 'bg-cyan-200 text-black',
  fighting: 'bg-red-700 text-white',
  poison: 'bg-purple-500 text-white',
  ground: 'bg-yellow-600 text-white',
  flying: 'bg-sky-300 text-black',
  psychic: 'bg-pink-500 text-white',
  bug: 'bg-lime-500 text-black',
  rock: 'bg-yellow-800 text-white',
  ghost: 'bg-indigo-600 text-white',
  dark: 'bg-gray-800 text-white',
  dragon: 'bg-purple-700 text-white',
  steel: 'bg-gray-500 text-white',
  fairy: 'bg-pink-300 text-black',
}


export default async function PkmnPage({ params }) {
  const { pkmnId } = params;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmnId}`);
  const pkmnInfo = await res.json();

  const height = pkmnInfo.height / 10;
  const weight = pkmnInfo.weight / 10;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 gap-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 text-center">
        Here&apos;s some info regarding <span className="capitalize text-blue-600">{pkmnInfo.name}</span>
      </h2>

      <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200 flex flex-col items-center gap-4 w-full max-w-md transition-transform hover:scale-[1.02]">
        <img
          src={pkmnInfo.sprites.other['official-artwork'].front_default}
          alt={pkmnInfo.name}
          className="w-48 h-48"
        />
        <h1 className="text-3xl font-bold capitalize">{pkmnInfo.name}</h1>
        <span className="text-gray-500 text-sm">#{pkmnInfo.id}</span>

        <div className="flex gap-2 mt-2">
          {pkmnInfo.types.map(({ type }) => (
            <span
              key={type.name}
              className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${typeColors[type.name]}`}
            >
              {type.name}
            </span>
          ))}
        </div>

        <div className="w-full text-left mt-6 space-y-2">
          <p><strong>Height:</strong> {height} m</p>
          <p><strong>Weight:</strong> {weight} kg</p>
          <p><strong>Base XP:</strong> {pkmnInfo.base_experience}</p>
        </div>
      </div>

      <Link href="/" className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"> Go Back </Link>
    </div>
  );
}