import './style.scss';
import Link from 'next/link';
import { useState, Fragment } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NavLink from '../NavLink';



function Header() {

   const [ openMO, setOpenMO ] = useState(false);

   return (
      <div id="header">
         <Logo />
         <div className="more-option">
            <span onClick={ () => setOpenMO(!openMO) }>•••</span>
            <AnimatePresence>
               { openMO && <MoreOptionsList blur={ () => setOpenMO(false) } /> }
            </AnimatePresence>
         </div>
      </div>
   )
}

const Logo = () => (
   <Link href="/">
      <a id="logo">
         <img src="/favicon.png" alt="logo_icon" />
         <p>Color Hunt</p>
      </a>
   </Link>
);

const MoreOptionsList = ({ blur }: { blur: any }) => {
   
   return(
      <Fragment>
         <div className="drop-back" onClick={ blur }></div>
         <motion.div 
            initial={{ clipPath: 'circle(0% at 100% 0)', opacity: 0, translateY: -20 }}
            animate={{ clipPath: 'circle(145% at 100% 0)', opacity: 1, translateY: 0 }}
            exit={{ clipPath: 'circle(0% at 100% 0)', opacity: 0, translateY: -20 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="drop-down"
         >
            <NavLink href="/palettes">Palettes</NavLink>
            <NavLink href="/create">Create</NavLink>
            <NavLink href="/likes">Likes</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="https://instagram.com/color.hunt">Instagram</NavLink>
         </motion.div>
      </Fragment>
   );
}


export default Header;
