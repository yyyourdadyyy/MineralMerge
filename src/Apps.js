// Filename: App.js
import{Header}  from "./components/Header.jsx"
import {MainPage} from "./pages/MainPage.jsx"
import{AddPostPage} from "./pages/AddPostPage.jsx"

import{Model3d} from "./pages/addPostPages/Model3d.jsx"
import{OreComposition} from "./pages/addPostPages/OreComposition.jsx"
import{Personal} from "./pages/addPostPages/Personal.jsx"
import{Remainder} from "./pages/addPostPages/Remainder.jsx"
import{Saturation} from "./pages/addPostPages/Saturation.jsx"
import{Techniq} from "./pages/addPostPages/Techniq.jsx"
import{YearsReport} from "./pages/addPostPages/YearsReport.jsx"

import{ToastContainer}from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import{useDispatch} from "react-redux"
import { useEffect } from "react"
import { getMe } from "./redux/features/auth/getMeSlice.js"


import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";



function App() {
    const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
	return (
		<div className="App">
			<Router>
            <Header />
				<Routes>
                <Route path='/' element={<MainPage/>}/>
                    <Route path='/new' element={<AddPostPage/>}>
                      <Route path='/main' element={<Model3d/>}/>
                        <Route path='/obj3d' element={<Model3d/>}/>
                        <Route path='/ore' element={<OreComposition/>}/>
                        <Route path='/pers' element={<Personal/>}/>
                        <Route path='/rem' element={<Remainder/>}/>
                        <Route path='/tech' element={<Techniq/>}/>
                        <Route path='/year' element={<YearsReport/>}/>
                        <Route path='/sat' element={<Saturation/>}/>
					          </Route>
				          </Routes>
                <ToastContainer position="bottom-left" width='230px' />
			</Router>
		</div>
	);
}

export default App;
