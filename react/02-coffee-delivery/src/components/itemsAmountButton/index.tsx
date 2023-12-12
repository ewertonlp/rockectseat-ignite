import { InputAmount } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface itemsAmountButtonProps {
  itemsAmount: number
  onIncrease: () => void
  onDecrease: () => void
}

export function ItemsAmountButton({
  itemsAmount,
  onIncrease,
  onDecrease,
}: itemsAmountButtonProps) {
  return (
    <InputAmount>
      <button onClick={onIncrease}>
        <Minus />
      </button>
      <input type="number" value={itemsAmount} readOnly min={1} />
      <button onClick={onDecrease}>
        <Plus />
      </button>
    </InputAmount>
  )
}
