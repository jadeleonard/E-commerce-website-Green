"use client"
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
  import { Input } from "@/components/ui/input"





1


const SignInButtonComponent = ({children}) => {
const {register,handleSubmit} = useForm();
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
      <Button variant={"design"} size={"lg"}>
        
        
        {children}

        </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-cover bg-center" style={{backgroundImage: "url('https://wallpaperaccess.com/full/128130.jpg')"}}>
          <AlertDialogHeader className={"w-[100px]"}>
          
          </AlertDialogHeader>
          <AlertDialogTitle>w
            Welcome Back  
          </AlertDialogTitle>
          <AlertDialogCancel className="absolute top-2 right-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>

          </AlertDialogCancel>
          <form onSubmit={handleSubmit((data) =>{
            console.log(data)
          })} className='mb-6'>
          <label className='block mb-2'>Email</label>
          <Input type="email"placeholder="Email"/>
          <label className='block mb-2'>password</label>
          <Input type="passwrod"placeholder="password"/>
          <div className='mt-6 inline-flex gap-4'>
          <Button type="submit">Submit</Button>
          <Button variant={"link"} size={"icon"}>Google</Button>
          </div>
          </form>
        </AlertDialogContent>
        </AlertDialog>
    </div>
  )
};




export default SignInButtonComponent