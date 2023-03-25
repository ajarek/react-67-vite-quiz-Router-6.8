import { Outlet, useLoaderData } from 'react-router-dom'
import './Main.css'
const Main = () => {
  return (
    <div className='layout'>
      <Outlet />
    </div>
  )
}

export default Main
