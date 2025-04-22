'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function PkmnList() {
  const [pkmns, setPkmns] = useState([]) // Lista de Pokémon
  const [offset, setOffset] = useState(0) // Offset para paginação
  const [isLoading, setIsLoading] = useState(false)

  // Função para fazer o fetch dos Pokémon
  const fetchPkmns = async (currentOffset) => {
    setIsLoading(true)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${currentOffset}`)
    const data = await res.json()
    setPkmns(prev => {
      const newPokemons = data.results.filter(item => 
        !prev.some(existing => existing.name === item.name)
      );
      return [...prev, ...newPokemons];
    })
    setIsLoading(false)
  }

  // useEffect para buscar os 20 primeiros Pokémon sempre que a página for carregada
  useEffect(() => {
    fetchPkmns(0) // Chama a função para buscar os primeiros 20 Pokémon
  }, []) // O array vazio garante que isso execute apenas uma vez quando a página for carregada

  // Função chamada quando o usuário clica no botão para carregar mais Pokémon
  const handleLoadMore = () => {
    setOffset(prev => {
      const newOffset = prev + 20
      fetchPkmns(newOffset) // Carrega mais Pokémon com o novo offset
      return newOffset // Atualiza o offset
    })
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold text-center">Pokémon List</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {pkmns.map((item, key) => {
          const id = item.url.split('/').filter(Boolean).pop()
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

          return (
            <Link
              key={key}
              href={`/${item.name}`}
              className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center bg-white"
            >
              <img src={imageUrl} alt={item.name} className="w-20 h-20 mb-2" />
              <span className="text-sm text-gray-500">#{id}</span>
              <h2 className="text-lg font-semibold capitalize">{item.name}</h2>
            </Link>
          )
        })}
      </div>

      <button
        onClick={handleLoadMore}
        disabled={isLoading}
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
      >
        {isLoading ? 'Carregando...' : 'Load more'}
      </button>
    </div>
  )
}