import { useState, useContext } from 'react';
import { AuthContext } from '../Services/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import '../components/css/CreateProduct.css'

const CreateProduct=({ onAddProductSubmit })=>{

    const { currentUser } = useContext(AuthContext);
    const isAuthenticated = currentUser != null;
    
    const [values, setValue] = useState({
        name: "",
        description: "",
        price: "",
        img: "",
        owner: currentUser ? currentUser.uid : null 
      });
      
      const onChangeHandler = (e) => {
        setValue(state => ({ ...state, [e.target.name]: e.target.value }))
      };
      const onSubmit = (e) => {
        e.preventDefault();
        onAddProductSubmit(values);
      }
    
    return(
      isAuthenticated ?
        <div className='nav_createproduct'><Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/catalog">
              Catalog
            </Link>
            <section id="create-page" className="auth">
              <form id="create-product" onSubmit={onSubmit} >
                <div className="container">
                  <div className='create-product-name'>
                    <h1>Add Product</h1>
                    <label htmlFor="name">Name:</label>
                    <input
                      value={values.name}
                      onChange={onChangeHandler}
                      type="text"
                      id="name "
                      name="name"
                      placeholder="Enter name..."
                      maxLength={30}
                      required
                    />
                  </div>
                  <div className='create-product-price'>
                    <label htmlFor="price">Price:</label>
                    <input value={values.price}
                      onChange={onChangeHandler}
                      type="number"
                      id="price"
                      name="price"
                      //min={1}
                      //placeholder={1}
                      decimalScale={2}
                      thousandseparator={true} 
                      required 
                    />
                  </div>

                  <div className="description">
                    <label htmlFor="description">Description:</label>
                    <textarea
                      id="description"
                      name="description"
                      value={values.description}
                      onChange={onChangeHandler}
                      maxLength={200}
                      required
                    />
                  </div>
          
                  <div className='create-product-image'>
                    <label htmlFor="img">Image:</label>
                    <input value={values.img}
                      onChange={onChangeHandler}
                      type="text"
                      id="img"
                      name="img"
                      placeholder="Upload a photo..."
                    />
                    <div className='btn-submit'>
                      <input
                        className="btn submit"
                        type="submit"
                        value="Add"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </section>
        </div> :
        <Navigate to="/login" />
    )
}

export default CreateProduct;
