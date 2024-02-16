
import { Genres } from "@/typings"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



async function GenreDropDown() {
 const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en'

 const options : RequestInit = {
  method :'GET',
  headers : {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_KEY}` 
  },
  next:{
    revalidate: 60 * 60 * 24
  }
 }

 const response = await fetch(url,options)

 const data = await response.json() as Genres

  return (
    <DropdownMenu>
  <DropdownMenuTrigger className='flex justify-center'>Genres <ChevronDown className="ml-"/> </DropdownMenuTrigger>
  
  <DropdownMenuContent>
    <DropdownMenuLabel>
      Select a Genre
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
  {data.genres.map((item: any, index: number) => (
        <DropdownMenuItem key={index}><Link href={`/genre/${item.id}?genre=${item.name}`}>{item.name}</Link></DropdownMenuItem>
      ))}
    
  </DropdownMenuContent>
</DropdownMenu>

  )
}

export default GenreDropDown