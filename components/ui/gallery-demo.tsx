import Image from 'next/image';
import React from 'react'

const GalleryDemo = () => {

    const images = [
        "/marque11.jpg", 
        "/marque0.jpg",
        "/marque8.jpg",
        "/marque1.jpg",
        "/marque2.jpg",
        "/marque4.jpg",
        "/marque3.jpg",
        "/marque6.jpg",
        "/marque7.jpg",
        "/marque5.jpg",
        "/marque10.jpg",
        "/marque9.jpg",
    ];

    return (
        <div className="columns-1 md:columns-3 lg:columns-4 py-10 md:py-20 gap-4">
            {
                images.map((src, index) => (
                    <div key={index} className="mb-4 break-inside-avoid rounded-lg overflow-hidden">
                        <Image
                            src={src} 
                            alt={`Gallery Image ${index + 1}`} 
                            height={200}
                            width={200} 
                            className="w-full h-auto object-cover rounded-lg" 
                        />
                    </div>
                ))  
            }
        </div>
    )
}

export default GalleryDemo

                // images.map((src, index) => (
                // <div key={index} className="mb-4 break-inside-avoid">
                //     <img src={src} className="w-full object-cver rounded-lg" />
                // </div> 
    