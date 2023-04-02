import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import firebase from '../firebase'
import './css/Edit.css'

 const Edit = () => {
  const { prodId } = useParams();
  const navigate = useNavigate();
  const db = firebase.firestore();
  const [values, setValues] = useState({
    name: '',
    price: '',
    description: '',
    img: '',
  });

  useEffect(() => {
    const prodRef = db.collection('catalog').doc(prodId);
    prodRef.get().then((doc) => {
      if (doc.exists) {
        const productData = doc.data();
        setValues(prevValues => ({ ...prevValues, ...productData }));
      } else {
        console.log('The product does not exist!');
      }
    }).catch((error) => {
      console.log('Error getting product:', error);
    });
  }, [prodId,db]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(state => ({ ...state, [name]: value }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting form with values:', values);
    const prodRef = db.collection('catalog').doc(prodId);
    console.log(prodRef);
    prodRef.update(values).then(() => {
      console.log('Product updated successfully');
      navigate(`/catalog/${prodId}`);
    }).catch((error) => {
      console.error('Error updating product:', error);
    });
  };

  return (
    <section id="edit-page" className="auth">
    <form id="edit" onSubmit={handleSubmit}>
      <div className="edit">
        <h1>Edit Product</h1>
        <div className="name">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="price">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            //min={1}
            decimalScale={2}
            thousandSeparator={true}  
            value={values.price}
            onChange={handleChange}
          />
        </div>
        <div className="description">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
        </div>
        <div className="img">
          <label htmlFor="img">Image:</label>
          <input
            type="text"
            id="img"
            name="img"
            value={values.img}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit">Save</button>
    </form>
  </section>
  
  );
};
export default Edit