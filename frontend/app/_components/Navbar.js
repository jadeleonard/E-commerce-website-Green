
"use client"
import React from 'react'
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"







import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  



const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-2 px-4'>
      <div className='mx-auto'>
        <img src='' width={125} height={40} alt='logo' />
      </div>
      <ul className='hidde sm:inline-flex gap-4 mx-auto'>
        <li className='text-zinc-100'><Link href={""}>Home</Link></li>
      </ul>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className='mx-auto'>

            <Button variant={"link"} size={"icon"}>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            Hello
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  )
}

export default Navbar
