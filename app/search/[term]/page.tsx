import { notFound } from "next/navigation"

type Props = {
  params: {
    term: string
  }
}

function Search({ params: { term } }: Props) {

  if (!term) notFound()

  const termToUse = decodeURI(term)

  return (
    <div >the search term is {termToUse}</div>
  )
}

export default Search