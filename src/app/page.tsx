/**
 * Authors: Nick Cecchin, Nathan Serre
 * Title: home page
 * Date: November 27th, 2024
 * Description: responsible for calling the back end API in 
 * line 26, and displaying popular homes.
 * Last Modified: November 23rd, 2024
 */



"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import {mockHouses} from "../app/mockHouses";

const HomePage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
            // Navigate to the results page with the search term as a query parameter
            router.push(`/results?query=${encodeURIComponent(searchTerm)}`);
        }
    };
    return (
        <div style={styles.container}>
            <main style={styles.mainContent}>
                <h1 style={styles.title}>Hit Your Dream Home out of the Park!</h1>
                <div style={styles.searchContainer}>
                    <input type="text"
                           placeholder="Search"
                           style={styles.searchInput}
                           value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)}
                           style={styles.searchInput} />
                    <button onClick={handleSearch} style={styles.searchButton}>🔍</button>
                </div>
                
                <h2 style={styles.popularTitle}>Popular Today:</h2>
        <div style={styles.carousel}>
          {Array.isArray(mockHouses) && mockHouses.map((house) => (
            <div key={house.id} style={styles.carouselCard}>
              <Link href={`/house/${house.id}`}>
                <div style={styles.imageWrapper}>
                  <p style={styles.priceTag}>${house.price.toLocaleString()}</p>
                  <img
                    src={house.photos[0]?.url || "/placeholder.jpg"} // Display the first photo or a placeholder
                    alt={house.photos[0]?.altText || "House image"}
                    style={styles.carouselImage}
     
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>

        <button style={styles.popularButton}>See more popular homes</button>

        {/* About Section */}
        <section style={styles.aboutSection}>
          <p>
            At Home Run, we believe that it’s time to take buying and selling your home into your own hands. By only taking
            a tenth of the commission of your local Realtor, Home Run makes it easy and affordable to purchase your new
            dream home, and keep more of your money selling your old home! We hope you hit it out of the park with Home Run!
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>Licensing Goes Here. Naming goes here. All images taken from Realtor.ca.</p>
        <p>I do not own any of the images in these pictures.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: { fontFamily: "Arial, sans-serif", color: "#333", maxWidth: "1200px", margin: "0 auto", padding: "20px" },
  mainContent: { textAlign: "center" },
  title: { fontSize: "2.5em", color: "#cc7c7c", margin: "20px 0" },
  searchContainer: { display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "30px", background: "#fff", color: "#fff"},
  searchInput: { transform: "translateX(30px)", padding: "10px 20px", fontSize: "1em", width: "225px", marginRight: "5px", borderRadius:"5px"},
  searchButton: {transform: "translateX(30px)", padding: "10px", fontSize: "1em" },
  popularTitle: { fontSize: "1.5em", margin: "20px 0" },
  carousel: { display: "flex", gap: "10px", justifyContent: "center", marginBottom: "30px", overflowX: "auto" },
  carouselCard: { position: "relative", width: "200px", height: "150px", cursor: "pointer" },
  imageWrapper: { position: "relative", width: "100%", height: "100%" },
  priceTag: {
    position: "absolute",
    top: "10px",
    left: "10px",
    background: "#000",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "0.9em",
  },
  carouselImage: { width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" },
  popularButton: { background: "#000", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px", marginTop: "10px" },
  aboutSection: { marginTop: "40px", padding: "20px", backgroundColor: "#f8d7d7", borderRadius: "10px" },
  footer: { textAlign: "center", fontSize: "0.8em", color: "#666", marginTop: "40px" },
};

export default HomePage;
