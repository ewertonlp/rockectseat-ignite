import { SearchFormContainer } from './styles'

interface SearchFormProps {
  inputData: string
  setInputData: (value: string) => void
  fetchSearchData: () => void
}

export function SearchForm({
  inputData,
  setInputData,
  fetchSearchData,
}: SearchFormProps) {
  
  const handleInputChange = (e) => {
    const newValue = e.target.value
    setInputData(newValue)
  }

  return (
    <SearchFormContainer onChange={fetchSearchData}>
      <input
        type="text"
        placeholder="Busque por conteúdo"
        value={inputData}
        onChange={handleInputChange}
      />
    </SearchFormContainer>
  )
}
