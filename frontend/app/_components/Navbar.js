"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import SignInButtonComponent from './SignInButtonComponent';








const Navbar = () => {
 


  return (
    <div className='flex items-center justify-between py-2 px-4'>
      <div className='mx-auto'>
        <Link href={"/"}>
        <img src='https://1000logos.net/wp-content/uploads/2017/04/Logo-NBA.png' width={125} height={40} alt='logo' />
        </Link>
      </div>
      
        
      <div className='mx-auto'>
   
    <SignInButtonComponent>
      Sign In
    </SignInButtonComponent>
    </div>
      
    </div>
  );
};

export default Navbar;
