import React, { useState } from 'react';
import "./home.css";
const Home = () => {
  const [books, setBooks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const author = event.target.elements.author.value;
    const isbn = event.target.elements.isbn.value;
    setBooks([...books, { title, author, isbn }]);
  };

  const handleDelete = (index) => {
    setBooks(books.filter((book, i) => i !== index));
  };

  const handleDeleteAll = () => {
    setBooks([]);
  };

  return (
    <div>
      <h1>Books Management Form</h1>
      <table>
        <tr>
          <td>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Title:
        </label><br/>
          <input type="text" name="title" className='myButton'/><br/>
        <label>
          Author:
        </label><br/>
          <input type="text" name="author" className='myButton' /><br/>
        <label>
          ISBN:
        </label><br/>
          <input type="text" name="isbn" className='myButton' /><br/><br/>

        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>
        
      </td>
      <td>
      <div>

      {books.length > 0 ? (
        <div className='show'>
          {books.map((book, index) => (
            <div key={index}>
              {/* <h2>Book {index + 1}</h2> */}
              <ul>
                {Object.entries(book).map(([key, value]) => (
                  <li key={key}>{`${key}: ${value}`}</li>
                  ))}
              </ul>
              <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
          <br/>
        <button onClick={handleDeleteAll} className="btn btn-danger myButton">Delete All</button>
        </div>
      ):<p className='show'>No book to display</p>}
      </div>
      </td>
      </tr>
      </table>
    </div>
  );
};

export default Home;
