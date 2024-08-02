import React, { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Form = () => {

    
    const [nom,setNom] = useState('')
    const [description,setDescription] = useState('')
    const [prix,setPrix] = useState(0)
    const [error, setError] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()


        if(!nom){
            setError("veuillez entrer le nom du produit")
            return;
        }

        
        if(!description){
            setError("veuillez entrer la descrition du produit")
            return;
        }

        
        if(!prix){
            setError("veuillez entrer le prix du produit")
            return;
        }else if(isNaN(prix)){
            setError("veuillez entre un entier")
            return;
        } else if( prix <0){
            setError("veuillez entre un prix positif")
            return;
        }

        

        

        setError("")

        axios.post('http://localhost:3000/postProduit',{
            nom:nom,
            description:description,
            prix:prix
        })
        .then(result=>{
            console.log(result)
        })
        .catch(err=>{
            console.error(err)
        })

        setNom('')
        setPrix(0)
        setDescription('')
    }


    

  return (
    <div>
        <div className='flex justify-around'>

            
            <form 
            onSubmit={handleSubmit}
            className=' flex gap-3 flex-col items-center justify-between w-1/4  py-3 mt-10 shadow-md border px-4 bg-slate-100'
            >
                <h2 className=' text-2xl text-blue-400 mb-2 font-semibold'>Ajouter un produit</h2>
                
                <Input value={nom} type="text" onChange={(e)=>{setNom(e.target.value)}} placeholder="entrez le nom du produit" label="Nom du produit"  />
                <div className=' w-full flex flex-col'>
                    <label htmlFor="" className=' text-xl font-medium'>Descrition</label>
                    <textarea  
                    className='  border outline-none bg-white py-2 px-2 rounded-md ' 
                    value={description} 
                    rows={5}
                    type="text"
                     onChange={(e)=>{setDescription(e.target.value)}} 
                    placeholder="entrez la description du produit"/>
                </div>
                <Input
                 value={prix}
                  type="text" 
                  onChange={(e)=>{setPrix(e.target.value)}}
                   placeholder="entrez le prix du produit"
                    label="Prix du produit"  />
                    {error && <p className=' text-red-400 text-sm text-left'> {error} </p> }
                <div className='w-full '>
                <input className=' py-2 rounded w-full text-center bg-blue-400 text-white' type="submit" value='ajouter' />
                </div>

                <div className=' w-full flex justify-between items-center'>
                <Link className=' text-blue-500 text-sm' to='/home'>Home</Link>
                    <Link className=' text-blue-500 text-sm' to='/listeDeproduit'> Liste des produits</Link>
                    
                </div>
            </form>
        </div>
    </div>
  )
}


function Input({value,type,onChange, placeholder,label}){

    const id = useId()

   return(
    <div className=' w-full flex flex-col'>
        <label htmlFor={id} className=' text-xl font-medium'>{label}</label>
        <input type={type} className=' border outline-none bg-white py-2 px-2 rounded-md ' placeholder={placeholder} value={value} onChange={onChange} id={id}/>
    </div>
   )


}
export default Form