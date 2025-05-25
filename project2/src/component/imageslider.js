// import React, { useState } from 'react';

// function App() {
//   const images = [
//     'https://placehold.co/800x450/FF6347/FFFFFF?text=Image+1', // Tomato
//     'https://placehold.co/800x450/4682B4/FFFFFF?text=Image+2', // SteelBlue
//     'https://placehold.co/800x450/32CD32/FFFFFF?text=Image+3', // LimeGreen
//     'https://placehold.co/800x450/DA70D6/FFFFFF?text=Image+4', // Orchid
//     'https://placehold.co/800x450/FFD700/FFFFFF?text=Image+5', // Gold
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-inter">
//       <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-3xl">
//         <div className="relative">
//           <img
//             src={images[currentIndex]}
//             alt={`Slide ${currentIndex + 1}`}
//             className="w-full h-auto object-cover rounded-t-lg"
//           />
//           <div className="absolute inset-y-0 left-0 flex items-center">
//             <button
//               onClick={goToPrevious}
//               className="bg-black bg-opacity-50 text-white p-3 rounded-r-lg hover:bg-opacity-75 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//               aria-label="Previous image"
//             >
//                 Previous
//             </button>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center">
//             <button
//               onClick={goToNext}
//               className="bg-black bg-opacity-50 text-white p-3 rounded-l-lg hover:bg-opacity-75 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//               aria-label="Next image"
//             >
//                 Next
//             </button>
//           </div>
//         </div>

//         <div className="p-4 text-center text-gray-600">
//           <p>
//             Image {currentIndex + 1} of {images.length}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;














// import { useState, useEffect } from 'react';
// import './ImageSlider.css';

// const ImageSlider = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
// //   useEffect(() => {
// //     if (images?.length > 0) {
// //       const timer = setInterval(() => {
// //         goToNext();
// //       }, 5000);
// //       return () => clearInterval(timer);
// //     }
// //   }, [currentIndex, images]);

//   const goToPrevious = () => {
//     const isFirstImage = currentIndex === 0;
//     const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNext = () => {
//     const isLastImage = currentIndex === images.length - 1;
//     const newIndex = isLastImage ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   if (!images || images.length === 0) {
//     return <div>No images to display</div>;
//   }

//   return (
//     <div className="slider-container">
//       <div className="slider">
//         <div className="slide" style={{ backgroundImage: `url(${images[currentIndex]})` }} />
        
//         <button className="arrow-button left-arrow" onClick={goToPrevious}>
//           ❰
//         </button>
//         <button className="arrow-button right-arrow" onClick={goToNext}>
//           ❱
//         </button>
        
//         <div className="dots-container">
//           {images.map((_, index) => (
//             <div
//               key={index}
//               className={`dot ${index === currentIndex ? 'active-dot' : ''}`}
//               onClick={() => goToSlide(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div> 
//   );
// };

// export default ImageSlider;




















import {useState,useEffect} from 'react'
import './ImageSlider.css';
function Imageslider({url,limit,page}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleImage = async (geturl) => {
        try{
            setLoading(true)
            const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if (data){
                setImages(data)
                setError(null);
                setLoading(false)
            }
        }catch(err){
            console.error(`Error loadis.kdnflsdkng image at index :`, err);
            setError(`Image at index  failed to loadlajfslkj.`);
            setLoading(false)
        }   
    }; 

    useEffect(()=>{
        if (url!== "")  handleImage(url)
    },[url])
console.log('images:', images);

if (loading) {
    return <div>Loading...</div>;
  }
if (error!== null) {
    return <div>Error: {error}</div>;
  }

  const nextimage=()=>{
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }
  const previmage=()=>{
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    }
  return (
    <div>
        <h1>Image Slider</h1>
        <div className="slider">
            <button onClick={nextimage}>Prev</button>
            
            <div className="image-container">
                {images && images.length > 0 ? (
                    images.map((image, index) => (
                        <img
                            key={index}
                            src={image.download_url || image.url}
                            alt={`Image ${index + 1}`}
                            className={currentIndex === index ? 'currentimg' : 'currentimg hidecurrentimg'}
                            style={{ width: '500px', height: '300px' }}
                        />
                    ))
                ) : (
                    <p>No images to display</p>
                )}
            </div>

            <span>
                {images && images.length > 0 ? (
                    images.map((_, index) => (
                        <button
                            key={index}
                            className={index === currentIndex ? 'dot' : 'dot hidedot'}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))
                ) : (
                    <p>No images to display</p>
                )}
            </span>
            


            <button onClick={previmage}>Next</button>
        </div>
    </div>
  )
}

export default Imageslider




































// import {useState} from 'react'

// function Imageslider({url,limit}) {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [images, setImages] = useState(["https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//         "https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?q=80&w=1880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://plus.unsplash.com/premium_photo-1729636852214-dff2864cce02?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1728588266992-a50e7adc55c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1746211752403-23b1ade5e20a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]);
//     const nextImage =  () => { 
//         setCurrentIndex(currentIndex===images.length -1? 0:currentIndex+1) 
//     }; 

//     const prevImage =  () => {
//         setCurrentIndex(currentIndex===0?  images.length -1 :currentIndex-1) 
//     }; 
//   return (
//     <div>
//         <h1>Image Slider</h1>
//         <div className="slider">
//             <button onClick={() => prevImage()}>Prev</button>
//             <img src={images[currentIndex]} alt="slider" style={{ width: '500px', height: '300px' }} />
//             <button onClick={() =>  nextImage()}>Next</button>

//             <h1>{currentIndex}</h1>
//         </div>
//     </div>
//   )
// }

// export default Imageslider