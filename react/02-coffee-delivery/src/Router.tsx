import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { Home } from './pages/home'
import { Cart } from './pages/cart'
import { Success } from './pages/success/success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order/:orderId/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
