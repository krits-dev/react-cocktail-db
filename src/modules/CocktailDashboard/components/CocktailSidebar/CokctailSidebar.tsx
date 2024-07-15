import { NavLinks } from 'components/NavLinks'
import { pageRoutes } from 'constants/pageRoutes'
import { cocktailName } from 'constants/ui'
import { INavLink } from 'components/NavLinks/NavLinks'
import './CocktailSidebar.scss'

const cocktailSidebarData: INavLink[] = [
  {
    name: cocktailName.MARGARITA,
    path: pageRoutes.MARGARITA,
  },
  {
    name: cocktailName.MOJITO,
    path: pageRoutes.MOJITO,
  },
  {
    name: cocktailName.A1,
    path: pageRoutes.A1,
  },
  {
    name: cocktailName.KIR,
    path: pageRoutes.KIR,
  },
]

function CocktailSidebar() {
  return (
    <div className='cocktail-sidebar-wrapper'>
      <NavLinks navLinksData={cocktailSidebarData} />
    </div>
  )
}

export default CocktailSidebar
