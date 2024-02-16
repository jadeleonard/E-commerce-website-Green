import { Link } from "react-router-dom"
import {DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,}
    from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";




import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-2 px-4'>
      




      <div className="mx-auto">
        <img src='' width={125} height={40} alt='logo' />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className={"block sm:hidden mx-auto "}>
            <Button variant={"ghost"} size={"lg"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            qweqweqwe
        </DropdownMenuContent>

      <ul className="hidden sm:inline-flex gap-4 mx-auto">
        <li><Link to={""}></Link></li>
      </ul>
      <Avatar>
        <DropdownMenuTrigger>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      
      </DropdownMenuTrigger>
    </Avatar>
    <DropdownMenuContent>
        Hello
    </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

export default Navbar
