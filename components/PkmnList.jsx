'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function PkmnList() {
  const [pkmns, setPkmns] = useState([])
  const [offset, setOffset] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const fetchPkmns = async () => {
    setIsLoading(true)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
    const data = await res.json()
    setPkmns(prev => [...prev, ...data.results])
    setIsLoading(false)
  }

  useEffect(() => {
    fetchPkmns()
  }, [offset])

  const handleLoadMore = () => {
    setOffset(prev => prev + 20)
  }

  return (
    <>
      <ul className="space-y-2">
        {pkmns.map((item, key) => (
          <li
            key={key}
            className="p-3 border border-gray-200 rounded-md hover:bg-gray-100 transition"
          >
            <Link className="text-blue-600 hover:underline" href={`/${item.name}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={handleLoadMore}
        disabled={isLoading}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? 'Carregando...' : 'Carregar mais'}
      </button>
    </>
  )
}
