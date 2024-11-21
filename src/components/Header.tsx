// src/components/Header.tsx
"use client";

import React from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header: React.FC = () => {
    const navigateToSellForm = () => {
        window.location.href = "/sell-form";
    };
    const navigateHome = () => {
        window.location.href = "/";
    
    };

    return (
        <header style={styles.header}>
            <img src="/homerun.svg" alt="Home Run Logo" style={styles.logo} onClick={navigateHome} />
            <nav style={styles.nav}>
                <button onClick={navigateToSellForm} style={styles.navButton}>Sell your home</button>
                <button style={styles.navButton}>Who We Are</button>
                <div style={styles.authButtons}>
                <SignedOut>
                    <SignInButton mode="modal">
                    <button style={styles.loginButton}>Login</button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                </div>
            </nav>
        </header>
    );
};

const styles = {
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }, 
    authButtons: { display: "flex", gap: "10px" },
    logo: { height: '60px' },
    nav: { display: 'flex', gap: '20px', alignItems: 'center' },
    navButton: { background: 'none', border: 'none', cursor: 'pointer', fontSize: '1em', color: '#000' },
    loginButton: { background: '#000', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' },
};

export default Header;
