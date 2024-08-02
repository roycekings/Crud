import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Produits = () => {

    const [produits,setProduits] = useState([])

    useEffect(()=>{ 

      const fetchData = async ()=>{  
          try {
              const response = await axios.get('http://localhost:3000/getProduit')
              setProduits(response.data)
          } catch (error) {
              console.error(error);
          }

      }

      fetchData()
      
  },[produits.length])
    
     
console.log(produits);
    
    const handleDelete = (id)=>{
         axios.delete(`http://localhost:3000/deleteProduit/${id}`)
        .then(()=>{
            setProduits(produits.filter(produit => produit.id!==id))
            .catch(err =>{console.error(err)})
        })
    }

 
  

 
  return (
    <div>
        <div className='shadow-xl flex flex-col w-1/2 mx-auto mt-12'> 
            <h2 className=' text-center text-2xl text-blue-400 mb-2 font-semibold'> Liste des produits</h2>
            <table>
                <thead className=' text-xl font-bold'>
                   <tr>
                        <th className=' px-2'>Nom</th>
                        <th className='px-2'>Description</th>
                        <th className=' px-2'>Prix</th>
                        <th className=' px-2'>action</th>
                   </tr>

                </thead>
                <tbody>
                    {produits.map((produit)=>(
                      //  {console.log(produit);}
                      (  
                        <tr key={produit._id } className="border bg-slate-200 w-full">
    <td className="py-2 px-2 text-xl text-slate-700 font-semibold">{produit.nom}</td>
    <td className="py-2 px-2 text-xl text-slate-700 font-medium">{produit.description}</td>
    <td className="py-2 px-2 text-xl text-slate-700 font-semibold">{produit.prix} fcfa</td>
    <td className="flex items-center justify-center gap-3 pt-2">
      <td className="text-center">
        <button className="text-blue-400 hover:underline" onClick={() => handleDelete(produit._id)}>Modifier</button>
      </td>
      <td className="text-center">
        <button className="text-red-500 hover:underline">Supprimer</button>
      </td>
    </td>
  </tr>
                      ) 
                    ))}
                    

                    
                </tbody>
            </table>
            <div className=' py-2 w-full flex justify-between items-center'>
                <Link className=' text-blue-500 text-sm' to='/home'>Home</Link>
                    <Link className=' text-blue-500 text-sm' to='/ajouterProduit'> Ajouter un produit</Link>
                    
                </div>
        </div>
    </div>
  )
}

export default Produits