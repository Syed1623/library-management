import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ReadBooks = () => {
    const param = useParams()
    console.log(param,"testin")
    const book_id = param.id
    const [book,setbook] = useState();
    useEffect(()=>{
        let fetchData = async () =>{
            const response  = await fetch(`http://localhost:4000/books/${book_id}`);
            const data = await response.json();
            setbook(data);
        }
        fetchData()
    },[book_id]);
    console.log(book)
  return (
    <div className="readbook">
      {book ?
      <div className='book container'>
        <img src={book?.thumbnailUrl} alt="" />
      </div>
      :<div className='nobook'>
        failed to fetch book
      </div>}
    </div>
  )
}

export default ReadBooks
