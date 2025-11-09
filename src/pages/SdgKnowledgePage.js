// SdgKnowledgePage.js - CORRECTED

import React, { useRef } from 'react'; // Step 1: Import the useRef hook
import { Link } from 'react-router-dom';
import './SdgKnowledgePage.css';

function SdgKnowledgePage() {
    // Step 2: Create refs for the sections you want to scroll to
    const overviewRef = useRef(null);
    const targetsRef = useRef(null);

    // Step 3: Create a function to handle the scrolling smoothly
    const handleScrollTo = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div className="knowledge-page-wrapper">
            {/* Header stays the same */}
            <header className="header">
                {/* ... your existing header code ... */}
            </header>
            <nav className="navigation">
                <div className="container">
                    <ul className="nav-links">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item dropdown open">
                            <Link to="/sdg-knowledge" className="nav-link">SDG Knowledge ▼</Link>

                            {/* --- START OF CHANGES --- */}
                            {/* Step 4: Update the dropdown links to use the new handler */}
                            {/* We replace the <a> tags with divs and use onClick */}
                            <div className="dropdown-menu" style={{ display: 'block' }}>
                                <div className="dropdown-item" onClick={() => handleScrollTo(overviewRef)}>
                                    Overview
                                </div>
                                <div className="dropdown-item" onClick={() => handleScrollTo(targetsRef)}>
                                    Goals & Targets
                                </div>
                            </div>
                            {/* --- END OF CHANGES --- */}

                        </li>
                        <li className="nav-item"><Link to="#" className="nav-link">SDG 10</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link">SDG 11</Link></li>
                        <li className="nav-item"><Link to="#" className="nav-link">About us</Link></li>
                    </ul>
                </div>
            </nav>

            <main className="main-content-knowledge">
                {/* --- START OF CHANGES --- */}
                {/* Step 5: Attach the refs to the actual <section> elements */}
                <section ref={overviewRef} id="overview" className="knowledge-section">
                    {/* --- END OF CHANGES --- */}
                    <div className="container">
                        <h1 className="knowledge-title">SDG Knowledge Overview</h1>
                        {/* ... your existing overview content ... */}
                    </div>
                </section>

                {/* --- START OF CHANGES --- */}
                {/* Step 5: Attach the refs to the actual <section> elements */}
                <section ref={targetsRef} id="targets" className="knowledge-section alt-background">
                    {/* --- END OF CHANGES --- */}
                    <div className="container">
                        <h2 className="section-title">Official Goals & Targets</h2>
                        {/* ... your existing targets content ... */}
                    </div>
                </section>
            </main>

            {/* Footer stays the same */}
            <footer className="footer">
                {/* ... your existing footer code ... */}
            </footer>
        </div>
    );
}

export default SdgKnowledgePage;