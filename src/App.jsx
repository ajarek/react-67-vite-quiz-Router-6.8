import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './pages/Error/Error'
import Dashboard from './pages/Dashboard/Dashboard'
import Start from './pages/Start/Start'
import Main from './layouts/Main/Main'
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
     
    ],
    
  },
  
])

function App() {
  

  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  )
}

export default App
