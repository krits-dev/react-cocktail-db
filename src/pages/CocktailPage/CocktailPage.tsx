import { pageRoutes } from 'constants/pageRoutes'
import { PageLayout } from 'layouts/PageLayout'
import { CocktailDashboard } from 'modules/CocktailDashboard'
import { CocktailCodeType } from 'modules/CocktailDashboard/redux/cocktailSlice'
import { Navigate, useParams } from 'react-router-dom'

function CocktailPage() {
  const { cocktailCode } = useParams()
  const validPages = ['margarita', 'mojito', 'a1', 'kir']

  if (!validPages.includes(cocktailCode as CocktailCodeType)) {
    return <Navigate to={pageRoutes.NOTFOUND} replace />
  }

  return (
    <PageLayout>
      <CocktailDashboard />
    </PageLayout>
  )
}

export default CocktailPage
