import React from 'react'
import { useEffect,useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
const BooksPage = () => {
  const loco = useLocation()
  const isDelete = loco.pathname.startsWith("/adminPortal")
  const [books, setBooks] = useState([]);
  useEffect(()=>{
    let fetchData = async () => {
      let response = await fetch("http://localhost:4000/books");
      let data = await response.json();
      setBooks(data);
    };
    fetchData();
  },[])
  const readBook=useNavigate()
  function handleClick(id){
    readBook(`/adminPortal/books/${id}`)
  }

  return (
    <div className="Books">
    <h1>BooksCollection</h1>
    <div className="bookCards">
      {books.map((item, index) => (
        <div key={index}>
          <div className="booksCard">
            <img src={item.thumbnailUrl} className="bookImg" alt="" />
            <div className="adminPara">
              <span>{item.title}</span>
              <span>{item.authors[0]}</span>
              <span>{item.categories[0]}</span>
              <span>{item.pageCount}</span>
            </div>
              <button className="readBookSubmit"onClick={()=>handleClick(item.id)}>ReadMore</button>
              {isDelete && <button className="readBookDelete"onClick={()=>handleClick(item.id)}>Delete</button>}
            <div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  )
}

export default BooksPage
