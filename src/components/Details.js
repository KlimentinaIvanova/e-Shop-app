import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import firebase from '../../src/firebase';
import { AuthContext } from '../Services/AuthContext';
import { Link } from 'react-router-dom';
import './css/Details.css'

export function Details() {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser ? currentUser._delegate.uid : null;
  const { prodId } = useParams();
  const [product, setProduct] = useState({});
  const [catalog, setCatalog] = useState(
    JSON.parse(localStorage.getItem('catalog')) || []
  );

  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const db = firebase.firestore();

      try {
        const doc = await db.collection('catalog').doc(prodId).get();

        if (doc.exists) {
          const productData = { id: doc.id, ...doc.data() };
          localStorage.setItem('catalog', JSON.stringify(productData));
          setProduct(productData);
        } else {
          console.log('The product was not found!');
        }
      } catch (error) {
        console.log('Unable to get the product:', error);
      }
    };

    getProduct();
  }, [prodId]);

  useEffect(() => {
    const getCatalog = async () => {
      const db = firebase.firestore();

      try {
        const snapshot = await db.collection('catalog').get();

        const catalogData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCatalog(catalogData);
        localStorage.setItem('catalog', JSON.stringify(catalogData));
      } catch (error) {
        console.log('Error accesing the required data:', error);
      }
    };

    getCatalog();
  }, []);

  const handleDeleteClick = async () => {
    const db = firebase.firestore();
    try {
      await db.collection('catalog').doc(prodId).delete();
      alert('Product has been deleted successfully!');

      const snapshot = await db.collection('catalog').get();
      const catalogData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCatalog(catalogData);


      localStorage.setItem('catalog', JSON.stringify(catalogData));

      navigate('/catalog', { replace: true });
    } catch (error) {
      console.log('Error:', error);
      alert('Error deleting product. Please try again.');
    }
  };


  return (
<div className='nav_details'>
<Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/catalog">
              Catalog
            </Link>
    <div className="row">
      <div className="img-name">
        <img
          className="img-name"
          src={product.img}
          alt={product.name}
        />
      </div>

      <p className="product-name"></p>
      <h3>{product.name}</h3>
      <hr />
      <p className="product-price">${product.price}</p>

      <form className="add-inputs" method="post">

        {product.owner === userId && (
          <div className="buttons">
            <Link to={`/catalog/${prodId}/edit`} className="btn_edit">Edit</Link>
            <button
              name="delete_product"
              type="button"
              className="btn_delete"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        )}
      </form>
      <hr />
      <div className='about-product'>
      <p className="product">About this product</p>
      <p className="product-description" mb="0">{product.description}</p>
      <hr />
      </div>
    </div>
    </div>
  )
};
export default Details

