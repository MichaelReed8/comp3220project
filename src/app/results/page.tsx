"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface House {
    brokeredBy: string;
    status: string;
    price: number;
    bed: number;
    bath: number;
    acreLot: number;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    houseSize: number;
    prevSoldDate: string;
}

const ResultsPage: React.FC = () => {
    const searchParams = useSearchParams();
    const city = searchParams.get('query');
    const [houses, setHouses] = useState<House[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHouses = async () => {
            if (city) {
                try {
                    setLoading(true);
                    const response = await fetch(`http://localhost:8080/api/search?city=${encodeURIComponent(city)}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch houses');
                    }
                    const data: House[] = await response.json();
                    setHouses(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchHouses();
    }, [city]);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Search Results for: &#34;{city}&#34;</h1>
            {loading ? (
                <p>Loading...</p>
            ) : houses.length > 0 ? (
                <ul style={styles.resultsList}>
                    {houses.map((house, index) => (
                        <li key={index} style={styles.resultItem}>

                            <p>City: {house.city}</p>
                            <p>State: {house.state}</p>
                            <p>Zip Code: {house.zipCode}</p>
                            <p>Price: ${house.price}</p>
                            {house.bed > 0 && <p>Bedrooms: {house.bed}</p>}
                            {house.bath > 0 && <p>Bathrooms: {house.bath}</p>}
                            <p>Lot Size: {house.acreLot} acres</p>
                            {house.houseSize > 0 && <p>House Size: {house.houseSize} sq ft</p>}

                        </li>
                    ))}
                </ul>
            ) : (
                <p>No houses found for &#34;{city}&#34;.</p>
            )}
        </div>
    );
};

const styles = {
    container: { fontFamily: 'Arial, sans-serif', color: '#333', maxWidth: '800px', margin: '0 auto', padding: '20px' },
    title: { fontSize: '2em', color: '#cc7c7c', margin: '20px 0' },
    resultsList: { listStyleType: 'none', padding: '0' },
    resultItem: { backgroundColor: '#f8d7d7', padding: '10px', margin: '10px 0', borderRadius: '5px' },
};

export default ResultsPage;
