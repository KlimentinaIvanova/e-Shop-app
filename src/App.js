import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Header from './components/Header';
import  Home  from './components/Home';
import Catalog from './components/Catalog'
import Contacts from './components/Contacts';
import {Details }from './components/Details';
import CreateProduct from './components/CreateProduct';
import Edit from './components/Edit';
import firebase from './firebase'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthProvider } from './Services/AuthContext';
import NotFound from './components/NotFound';



function App() {
  const [auth,setAuth]=useState({})
  const [products,setProducts]=useState([])
  const navigate=useNavigate()

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("catalog")
      .get()
      .then((result) => {
        const data = [];
        result.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setProducts(data);
      });
  }, []);

  const userLogin = (authData) => {
    setAuth(authData)
    
  }

  //const addComment=(productsId,comment)=>{
    //setProducts(state=>{
     // const product=state.find(x=>x.id===productsId)
   // const comments=product.comments || []
   // comments.push(comment)

//return[
 // ...state.filter(x=>x.id !== productsId),
 // {...product, comments: comments}, 
//]

   // })
  //}

  const onAddProductSubmit = async (data) => {
    const db = firebase.firestore();
    const newProductRef = await db.collection("catalog").add(data);
    const newProduct = { id: newProductRef.id, ...data };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    navigate("/catalog");
   
  };

 
  return (
<>
<AuthProvider value={{ user: auth, userLogin }}>
<Routes>
  <Route path='/'element={<Header/>}/>
  <Route path='/'element={<Home/>}/>
  <Route path='/catalog'element={<Catalog products={products}/>}/>
  <Route path='/contacts'element={<Contacts/>}/>
  <Route path='/login'element={<Login/>}/>
  <Route path='/logout' element={<Logout/>}/>
  <Route path='/register'element={<Register/>}/>
  <Route path='/create'element={<CreateProduct onAddProductSubmit={onAddProductSubmit}/>}/>
  <Route path="/catalog/:prodId" element={<Details products={products}/>} />
  <Route path='/catalog/:prodId/edit' element={<Edit/>}/>
  <Route path="*" element={<NotFound/>}/>
</Routes>

  </AuthProvider>
</>
  );
}
export default App;
