import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'>{
   transparent?: boolean
}

export function IconButton({ transparent, disabled, children, ...props }: IconButtonProps) {

   return (
      <button 
         {...props} 
         className={twMerge(
            'border-white/10 rounded-md p-1.5',
            transparent ? 'g-black/20' : 'bg-white/10',
            disabled ? 'opacity-50' : null
         )}
      >
         {children}
      </button>      
   )

}