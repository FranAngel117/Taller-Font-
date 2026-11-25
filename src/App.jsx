import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DataProvider } from './context/DataContext'

import HomeContainer from './containers/HomeContainer'
import ImplementationContainer from './containers/ImplementationContainer'
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route
            path="/implementacion"
            element={<ImplementationContainer />}
          />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App