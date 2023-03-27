import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react';

 export const CatalogItem = ({
  id,
  name,
  price,
  img,
  likes,
}) => {
  const [numLikes, setLikes] = useState(likes ?? 0);

  const handleLikeClick = () => {
    const newLikes = numLikes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes_${id}`, newLikes.toString());
  };

  useEffect(() => {
    const storedLikes = localStorage.getItem(`likes_${id}`);
    if (storedLikes) {
      setLikes(parseInt(storedLikes));
    }
  }, [id]);

 

  return (
    
    <div className="card product-item">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

      <div className="product-img">
        <img className="img-fluid" src={img} />
      </div>
      <div className="card-body border-left">
        <h6 className="text-truncate mb-3">{name}</h6>
        <div className="d-flex justify-content-center">
          <p className="product-price">${price}</p>
        </div>
      </div>
      <div className="card-footer">
        <Link to={`/catalog/${id}`} className="btn btn-sm">
          View Detail
        </Link>
        <div>
          <button className="btn btn-link" onClick={handleLikeClick}>
            <i className="fas fa-thumbs-up" />
            {numLikes}
          </button>
        </div>
      </div>
    </div>
  );
};
export default CatalogItem

