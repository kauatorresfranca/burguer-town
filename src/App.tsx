import Home from './pages/home/index'
import { Route, Routes } from 'react-router-dom'
import Orders from './pages/orders'
import Navigation from './components/navigation/index.'
import { Provider } from 'react-redux'
import { store } from './store'
import Admin from './pages/admin'

function App() {

  return (
    <div className="container">
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedidos" element={<Orders />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Provider>
    </div>
  )
}
  
export default App