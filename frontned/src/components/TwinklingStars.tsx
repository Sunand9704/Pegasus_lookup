const TwinklingStars = () => {
    const stars = Array.from({ length: 150 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
    }));

    return (
        <div className="stars-container absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star absolute bg-white rounded-full opacity-0"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animation: `twinkle ${star.duration}s infinite ease-in-out ${star.delay}s`,
                        boxShadow: star.size > 2 ? '0 0 10px rgba(255, 255, 255, 0.8)' : 'none',
                    }}
                />
            ))}
        </div>
    );
};

export default TwinklingStars;
