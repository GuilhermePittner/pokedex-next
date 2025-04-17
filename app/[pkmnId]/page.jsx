

export default async function PkmnPage({params}) {
    const { pkmnId } = params;

    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmnId}`);
    const pkmnInfo = await data.json();

    return (
        <>
          <h1 className="text-2xl font-bold capitalize">{pkmnInfo.name}</h1>
          <img src={pkmnInfo.sprites.front_default} alt={pkmnInfo.name} />
        </>
      );
}

