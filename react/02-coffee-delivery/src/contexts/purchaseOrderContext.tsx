import { createContext, useContext, useState, ReactNode } from 'react'

interface PurchaseOrderContext {
  newPurchaseOrder: () => void
}

const PurchaseOrderContext = createContext({} as PurchaseOrderContext)

export function usePurchaseOrder() {
  return useContext(PurchaseOrderContext)
}

interface PurchaseOrderProviderProps {
  children: ReactNode
}

export function PurchaseOrderProvider({
  children,
}: PurchaseOrderProviderProps) {
  const [order, setOrder] = useState([])

  function newPurchaseOrder(orderData) {
    setOrder(orderData)
  }

  return (
    <PurchaseOrderContext.Provider value={{ newPurchaseOrder, order }}>
      {children}
    </PurchaseOrderContext.Provider>
  )
}
