
import './App.css'
import Contact from './components/Contact'
import Project from './components/Projects/Project'
import Home from './components/Home/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root'
import About from './components/About/About'
import Resume from './components/Resume'
function App() {
  const router = createBrowserRouter ([
    {
      path:"/",
      element:<Root />,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'about',
          element:<About />
        },
        {
          path:'project',
          element:<Project/>
        },
        {
          path:'contact',
          element:<Contact/>
        },
        {
          path:'resume',
          element:<Resume/>
        }

      ]

    }
  ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
