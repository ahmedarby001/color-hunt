import { useRouter } from "next/router";
import Link from "next/link";

type NavLinkProps = {
   children?: any;
   href: string;
};

const NavLink = ({ href, children }: NavLinkProps) => {

   const { asPath } = useRouter();
   const isActive = asPath === href;

   return(
      <Link href={ href }>
         <a className={`drop-item ${isActive && 'active-link'}`}>
            { children }
         </a>
      </Link>
   );
}

export default NavLink;
