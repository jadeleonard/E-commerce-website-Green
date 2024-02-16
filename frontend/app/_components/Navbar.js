"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import SignIn from "@/components/SignIn"; // Import SignIn component if it's defined






import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
        if (response.ok) { // Check if the response is successful
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className='flex items-center justify-between py-2 px-4'>
      <div className='mx-auto'>
        <img src='' width={125} height={40} alt='logo' />
      </div>
      <ul className='hidden sm:inline-flex gap-4 mx-auto'> {/* Corrected 'hidde' to 'hidden' */}
        <li className='text-zinc-100'><Link href={""}>Home</Link></li>
      </ul>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} size={"icon"}> {/* Corrected 'variat' to 'variant' */}
              <Avatar>
                <AvatarImage src={""} /> {/* Assuming user.avatar contains the URL of the avatar */}
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Navbar;
