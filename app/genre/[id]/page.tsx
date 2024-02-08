import { notFound } from "next/navigation";

type Props = {
  params : {
    id : string;
  },
  searchParams : {
    genre : string;
  }
}

function GenrePage({params : {id}, searchParams : {genre}} : Props) {
  if(!id) notFound()

  const decodedSearchParams = decodeURI(genre)
  return (
    <div>GenrePage for id={id} and genre type is {decodedSearchParams}</div>
  )
}

export default GenrePage