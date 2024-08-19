import React, { useEffect, useState } from 'react';

function Star() {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [delay, setDelay] = useState(0);

    useEffect(() => {
        const randomizePosition = () => {
            const top = Math.random() * 100 + '%';
            const left = Math.random() * 100 + '%';
            setPosition({ top, left });
        };
        randomizePosition();

        // Set a random animation delay between 0 and 5 seconds
        const randomDelay = Math.random() * 5 + 's';
        setDelay(randomDelay);

        const interval = setInterval(() => {
            randomizePosition();
        }, 3000); // Reposition every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div 
            className="star" 
            style={{ 
                top: position.top, 
                left: position.left,
                animationDelay: delay, // Apply the random delay
                animation: 'fadeInOut 3s ease-in-out infinite',
                zIndex: '1'
            }}
        >
            <svg width="150px" height="150px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="glowing-star">
    <path d="M14.6394 3.47278C14.8711 2.84241 15.7956 2.84241 16.0272 3.47278L16.8211 5.63332C16.8953 5.8351 17.0599 5.99384 17.2691 6.06534L19.5097 6.83089C20.1634 7.05426 20.1634 7.94574 19.5097 8.16911L17.2691 8.93466C17.0599 9.00616 16.8953 9.1649 16.8211 9.36668L16.0272 11.5272C15.7956 12.1576 14.8711 12.1576 14.6394 11.5272L13.8455 9.36668C13.7714 9.1649 13.6068 9.00616 13.3975 8.93466L11.157 8.16911C10.5032 7.94574 10.5032 7.05426 11.157 6.83089L13.3975 6.06534C13.6068 5.99384 13.7714 5.8351 13.8455 5.63332L14.6394 3.47278Z" 
    stroke="#FFD700" strokeWidth="2" strokeLinejoin="round"/>
</svg>

        </div>
    );
}

export default Star;
