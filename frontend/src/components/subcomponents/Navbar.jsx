import React from 'react'
import { Link } from 'react-router-dom'
const navbar =[
    {"name":"Home","href":"/"},
    {"name":"Sign Up","href":"/sign-up"},
    {"name":"Sign In","href":"/sign-in"},
    {"name":"About","href":"/about"},

]
const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-2 px-4'>
    <div className='mx-auto'>



        <img src=''width={125} height={40} alt='logot' />
    </div>
    <ul className='hidden sm:inline-flex gap-4 mx-auto'>
        {
            navbar.map((items) =>(
                <li key={items.id}>
                    <Link to={items.href}>
                        {items.name}
                    </Link>
                </li>
            ))
        }
    </ul>
    
    </div>
  )
}

export default Navbar
