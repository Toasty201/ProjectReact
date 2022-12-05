import React, { useEffect, useState } from 'react';
import Item from '../item/item';
import { productList } from '../../Data/data'; //lista de productos
import './itemList.css';

//defino la lista
const ItemList = () => {
    const [products, setProducts] = useState([]);

const getProducts = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        if (true) {
            resolve(productList);
          } else {
            reject('error');
          }
    }, 2000); //2s

});


const getProductsFromDB = async () => { //es ficticio
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.error(error);
      alert('No hay productos diponibles para mostrar');
    }
  };

  //uso useeffect para llamar a la BD
  useEffect(() => {
    getProductsFromDB();
  }, []);





    return(
        <div className="">{        
          products.length ? (<>{                
                products.map((product) => {
                  return (
                    <Item
                      key={product.id}
                      name={product.name}
                      thumbnail={product.thumbnail}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                    />
                  );
                })
              }
            </>
          ) : (
            <p>Cargando productos...</p>
          )
        }
      </div>
        
    );
}

export default ItemList;
