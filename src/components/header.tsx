import { NavLink } from './nav-link'

import nlwUniteIcon from '../assets/nlw-unite-icon.svg'

export function Header() {
   return (
      <div className='flex items-center gap-5 py-8'>
         <img src={nlwUniteIcon} alt='Ícone NLW-Unite' />
         <nav className='flex items-center gap-5'>
            <NavLink href='/eventos'>Eventos</NavLink>
            <NavLink href='/participantes'>Participantes</NavLink>
         </nav>
      </div>
   )
}