import React from 'react';
import './App.css';
import courses from './images/course';
import Course from './components/Course';
import { useState } from 'react';

function App() {
  const [purchased, setPurchased] = useState([])

  const handlePurchase = (course) => {
    setPurchased([...purchased, course])
  }

  let totalPrice = 0;
  for (let i = 0; i < purchased.length; i++) {
    totalPrice += purchased[i].price;
  }

  return (
    <div className="App">
      <header className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">ONLINE COURSES</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-item nav-link active" href="#">Courses Added: {purchased.length}</a>
              <a className="nav-item nav-link active" href="#">Total Price: {totalPrice.toFixed(2)}</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="row">
            {
              courses.map(course => <Course course={course} handlePurchase={handlePurchase} key={course.name} />)
            }
          </div>
        </div>
      </main>

      <footer style={{padding:'10px'}}>&copy; Sadman Sakib Mugdho</footer>
    </div>
  );
}

export default App;
