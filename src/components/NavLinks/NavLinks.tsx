import { Link, useLocation } from 'react-router-dom'
import { cocktailName } from 'constants/ui'
import { pageRoutes } from 'constants/pageRoutes'
import cn from 'classnames'
import './NavLinks.scss'

export interface INavLink {
  name: cocktailName
  path: pageRoutes
}

interface INavLinksProps {
  navLinksData: Array<INavLink>
}

function NavLinks({ navLinksData }: INavLinksProps) {
  const { pathname } = useLocation()

  return (
    <ul className='nav-links-wrapper'>
      {navLinksData?.map(({ name, path }) => (
        <li key={path}>
          <Link
            className={cn({ ['active-link']: path === pathname })}
            to={path}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
