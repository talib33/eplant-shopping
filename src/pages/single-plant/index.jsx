import React from 'react'
import { useParams } from 'react-router-dom'
import { airPurifyingPlants, } from '../../assets/data';
import SingleProductComponent from '../../component/product-list/single-product';
import ProductList from '../../component/product-list';

const SinglePlant = () => {
    const {id} = useParams();
   

    const allPlants = [...airPurifyingPlants];
    const plants= allPlants.find((item)=>item?.id === Number(id));
    
  return (
    <>
    <SingleProductComponent plants={plants}/>

   
    {/* <div className='container mt-4 mx-auto justify-content-center'>
         <h6 className='text-center fs-4'> More Products</h6>
    
        <ProductList />

    </div> */}
    </>
  )
}

export default SinglePlant