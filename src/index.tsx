import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDom from 'react-dom/client'

import Router from '@/routes'
import '@/asset/styles/index.module.less'

const rootElement = document.getElementById('root') as Element | DocumentFragment
const root = ReactDom.createRoot(rootElement)
root.render(
  <BrowserRouter>
    <Suspense>
      <Router />
    </Suspense>
  </BrowserRouter>
)
