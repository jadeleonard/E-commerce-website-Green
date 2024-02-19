import React from "react";







function Button ({children}){
    return(
        <button className="
        text-zinc-100 rounded-md bg-gradient-to-t
         from-slate-900 to-slate-600
          py-2 px-4 transition duration-500
           hover:bg-gradient-to-t
            hover:from-slate-600
             hover:to-slate-900 hover:transition
              hover:duration-500 font-sans hover:shadow-md
               hover:shadow-slate-400
        
        
        ">
        {children}
        </button>
    )
};


export {
    Button
}