import{ createContext,useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './pages/Error/Error'
import Dashboard from './pages/Dashboard/Dashboard'
import Start from './pages/Start/Start'
import Result from './pages/Result/Result'
import Main from './layouts/Main/Main'
export const AppContext = createContext()
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Start />,
        // loader: dashboardLoader,
        // action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        // loader: dashboardLoader,
        // action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: '/result',
        element: <Result />,
        // loader: dashboardLoader,
        // action: dashboardAction,
        errorElement: <Error />,
      },
    ],
  },
])

function App() {
  const [points,setPoints]=useState(0)
  return (
    <div className='App'>
      <AppContext.Provider value={{ points,setPoints }}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App
