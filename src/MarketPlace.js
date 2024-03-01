import React from 'react';
import Header from './Header';
import Footer from './Footer'; 

function AvailableListings() {
  return (
    <div>
     <Header /> {}
      <section id="All-Listings">
        <h2>Available Listings</h2>
        <section id="Filter">
          <label htmlFor="category">Filter by Category:</label>
          <select id="category">
            <option value="all">All</option>
            <option value="textbooks">Textbooks</option>
            <option value="notes">Notes</option>
            <option value="schoolSupplies">School Supplies</option>
            <option value="other">Other</option>
          </select>
        </section>
        <div className="listings-container">
          <section className="textbook-listings">
            <div className="textbook-item-container">
              <img src="img/biobook.png" alt="Textbook 1 Image" />
              <a href="bookinfo.html">Campbell Biology</a>
            </div>
            <div className="textbook-item-container">
              <img src="img/algebrabook.jpg" alt="Textbook 2 Image" />
              <a href="#">College Algebra</a>
            </div>
            <div className="textbook-item-container">
              <img src="img/pythonbook.png" alt="Textbook 3 Image" />
              <a href="#">Python Programming</a>
            </div>
            <div className="textbook-item-container">
              <img src="img/pythonbook.png" alt="Textbook 3 Image" />
              <a href="#">Python Programming</a>
            </div>
          </section>
        </div>
      </section>

      <Footer /> {}
    </div>
  );
}

export default AvailableListings;