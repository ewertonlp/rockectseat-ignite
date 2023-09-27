import { ReactNode, createContext, useState } from 'react'
import { api } from '../services/api'

interface ContextType {
  fetchSearchData: () => void
  inputData: string
  setInputData: (value: string) => void
  filteredIssues: string[]
}

export const Context = createContext({} as ContextType)

interface ContextProviderProps {
  children: ReactNode
  inputData: string // Recebe inputData do componente pai
  setInputData: (value: string) => void // Recebe setInputData do componente pai
}

export function ContextProvider({
  children,
  inputData,
  setInputData,
}: ContextProviderProps) {
  const [filteredIssues, setFilteredIssues] = useState([])

  const fetchSearchData = async () => {
    const username = 'ewertonlp'
    const repo = 'rockectseat-ignite'

    try {
      const response = await api.get(
        `/search/issues?q=is:issue+${inputData}%20repo:${username}/${repo}`
      )
      const issues = response.data.items || []
      setFilteredIssues(issues)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Context.Provider
      value={{ fetchSearchData, inputData, setInputData, filteredIssues }}
    >
      {children}
    </Context.Provider>
  )
}
