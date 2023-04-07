import './css/Catalog.css'
import {CatalogItem} from './CatalogItem'
//import {  Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'

 export const Catalog=({products})=>{
    console.log(products)
    return(
      <div className='additional_navigation'>
                <Link className="nav-link" to="/">
              Home
            </Link>
        <div className="container">
        <div className="all_products">
        
          <h2 className="section-title">
            <span className="px-2">All Products</span>
          </h2>
        </div>
        <div className='no_products'>
          {products.map(x => <CatalogItem key={x.id} {...x} />)}
          {products.length === 0 && (
            <h3 className="no-articles">No products yet</h3>
          )}
    
        </div>        
      </div>
      </div>
     
     
    )
}
export default Catalog