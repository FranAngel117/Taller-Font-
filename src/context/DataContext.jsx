import { createContext, useContext, useState } from 'react'
import bffClient from '../services/bffClient'

const DataContext = createContext(null)

export function DataProvider({ children }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const refreshData = async (endpoint) => {
    try {
      setLoading(true)
      setError(null)

      const response = await bffClient.get(endpoint)

      setData(response.data)

    } catch (err) {
      console.error(err)
      setError('No se pudieron cargar los datos del servidor')
    } finally {
      setLoading(false)
    }
  }

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        refreshData,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  return useContext(DataContext)
}