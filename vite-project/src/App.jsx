
import  { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Products from '../pages/Products';
import MainLayout from '../layout/mainLayout';
import testy1 from '../pages/test';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<MainLayout/>}>
        <Route index element={<Home />} />
        <Route path='/Contact'
         element={<Contact/>}/>

        <Route path='/About' 
        element={<About/>}/>

        <Route path='/Products' 
        element={<Products/>}/>

        <Route path='/test'
        element = {<testy1/>}/>

    </Route>));


  return <RouterProvider router= {router}/>
}

export default App



