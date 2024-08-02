import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className=' w-full h-full flex items-center justify-around mt-32 '>
        <div className='  py-5 flex flex-col gap-4 w-1/3  grid-cols-3 bg-slate-100 rounded drop-shadow shadow-md'>
            <h2 className=' text-center text-2xl font-medium text-blue-400'> Application de CRUD</h2>
            <div className=' flex flex-col'>
                <Link to= '/ajouterProduit' className='  text-center text-xl font-medium text-slate-700 border w-full py-1 hover:text-white hover:bg-slate-700'>Ajouter un produit</Link>
                <Link to = '/listeDeproduit' className=' text-center text-xl font-medium text-slate-700 border w-full  py-1 hover:text-white hover:bg-slate-700'>Liste des produits</Link>
            </div>
        </div>
    </div>
  )
}

export default Home