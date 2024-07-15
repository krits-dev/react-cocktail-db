import { ReactNode } from 'react'
import './PageLayout.scss'

interface IPageLayoutProps {
  children: ReactNode
}

function PageLayout({ children }: IPageLayoutProps) {
  return <div className='page-layout'>{children}</div>
}

export default PageLayout
