import { useState, useEffect } from 'react';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

const Hero = () => {
    const images = [img2, img3];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to change image every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    const handleArrowClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative min-h-screen flex justify-center items-center">
            <div className="flex justify-center items-center overflow-hidden">
                <img
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    className="object-cover w-full h-full"
                />
            </div>

            <div
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
                onClick={handleArrowClick}
            >
                <span className="text-3xl">→</span>
            </div>
        </div>
    );
};

export default Hero;
