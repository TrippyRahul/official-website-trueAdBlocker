import Image from 'next/image';
import React from 'react';

const PlatformIcons = () => {
   const icons1 = ['/Hulu.png', '/youtube.png', '/twitch.png', '/Spotify.png']
   const icons2 = ['/Hulu.png', '/youtube.png', '/twitch.png', '/Spotify.png']
   const icons3 = ['/Hulu.png', '/youtube.png', '/twitch.png', '/Spotify.png']
   const icons4 = ['/Hulu.png', '/youtube.png', '/twitch.png', '/Spotify.png']
   const icons = [...icons1, ...icons2, ...icons3, ...icons4]
   return (
      <div>
         <div className='text-white text-[5rem] font-semibold text-center pb-16 tracking-wide'>All in One</div>
         <div className="slider w-[340px] md:w-full">
            <div className="slide-track">
               {
                  icons?.map((item, ind) => (
                     <div className="slide pl-10" key={ind}>
                        <Image className='cursor-pointer' src={item} quality={100} height="100" width="250" alt="" />
                     </div>
                  ))
               }
            </div>
         </div>
      </div>
   );
};

export default PlatformIcons;