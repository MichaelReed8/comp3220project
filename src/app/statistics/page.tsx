"use client";
import React, { useState } from "react";

const StatsPage: React.FC = () => {
    const [city, setCity] = useState("");
    const [stats, setStats] = useState<number[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchStats = async () => {
        setError(null); // Reset error state
        try {
            const response = await fetch(`http://localhost:8080/api/stats?city=${encodeURIComponent(city)}`);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await response.json();
            setStats(data); // Update stats state
        } catch (err) {
            setError("Failed to fetch stats. Please try again.");
        }
    };

    return (
        <div>
            <div className="flex flex-col justify-content-center align-items-center">
            <h1>City Statistics</h1>
            <input
                type="text"
                style={styles.searchInput}
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={fetchStats} className={"bg-gray-200"}>Get Statistics</button>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}

            {stats ? (
                <div>
                    <h2>Statistics for {city}:</h2>
                    <ul>
                        <li>Average Price: ${stats[0].toFixed(2)}</li>
                        <li>Average Lot Size: {stats[1].toFixed(2)} acres</li>
                        <li>Average Beds: {stats[2].toFixed(2)}</li>
                    </ul>
                </div>
            ) : (
                <p>No statistics available.</p>
            )}
        </div>
    );
};

export default StatsPage;

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
