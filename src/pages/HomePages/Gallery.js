import React from 'react';

const Gallery = () => {
    const galleryImage = [
        "https://i.ibb.co/N6y75hS/Rectangle-12-1.png",
        "https://i.ibb.co/vsGBJ6b/Rectangle-12-2.png",
        "https://i.ibb.co/k62qtPW/Rectangle-12-3.png",
        "https://i.ibb.co/tBgsG6W/Rectangle-12-4.png",
        "https://i.ibb.co/tZzYrJc/Rectangle-12.png"
    ]
    return (
        <section id='gallery' className='mt-20 bg-[#040F16]'>
            {/* gallery container */}
            <div className='max-w-[1300px] pt-20 text-center mx-auto'>
                {/* gallery title header */}
                <div>
                <h2 className='text-[#2554D7] text-xl default-font-use'>gallery</h2>
                <h4 className='text-3xl md:text-4xl lg:text-[56px] text-[#FBECEB] mb-10 mt-4 font-bold
'>INSTAGRAM</h4>
                </div>
                {/* gallery image */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                    {
                        galleryImage.map((image , idx)=><img className='w-[90%] md:w-full mx-auto' key={idx} src={image}></img>)
                    }
                </div>
                  {/* footer horizontal line */}
              <hr className='max-w-[1300px] mt-20 mx-auto text-white opacity-50' />
            </div>
        </section >
    );
};

export default Gallery;