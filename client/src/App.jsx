import Form from "./components/Form"
import Home from "./components/Home"
import Produits from "./components/Produits"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const routes = (
  <Router>
    <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/ajouterProduit" element={<Form />}/>
        <Route path="/listeDeproduit" element={<Produits />}/>

    </Routes>
  </Router>
) 
function App() {
 
  return (
    <div>
     {routes}
    </div>
  )
}

export default App
