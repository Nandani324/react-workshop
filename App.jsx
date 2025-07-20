import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Create from './Pages/Create';
import Edit from './Pages/Edit';
import Blog from './Pages/Blog';
import LearningUseState  from './Pages/LearningUseState';
import Singlepage from './Pages/Singlepage';



function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/home' element={<Home/>}/>
      <Route path="!" element={<Blog />} />
      <Route path='/blog' element={<Blog/>}/>
      <Route path="@" element={<Create />} />
      <Route path='/create' element={<Create/>}/>
      <Route path="#" element={<Edit />} />
      <Route path='/edit' element={<Edit/>}/>
      <Route path="#" element={<Singlepage/>}/>
      <Route path='/single/:id' element={<Singlepage/>}/>
      <Route path='/LearningUseState' element={<LearningUseState/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App