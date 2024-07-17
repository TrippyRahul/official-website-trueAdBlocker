import Image from 'next/image';
import React from 'react';

const PlatformIcons = () => {
   const icons1 = ['/hulu.png', '/youtube.png', '/twitch.png', '/Spotify.png']
   const icons2 = ['/hulu.png', '/youtube.png', '/twitch.png', '/Spotify.png']
   const icons3 = ['/hulu.png', '/youtube.png', '/twitch.png', '/Spotify.png']
   const icons4 = ['/hulu.png', '/youtube.png', '/twitch.png', '/Spotify.png']
   const icons = [...icons1, ...icons2, ...icons3,...icons4]
   return (
      <div class="slider w-[340px] md:w-full">
         <div class="slide-track">
            {
               icons?.map((item, ind) => (
                  <div class="slide pl-10" key={ind}>
                     <Image className='cursor-pointer' src={item} quality={100} height="100" width="250" alt="" />
                  </div>
               ))
            }
         </div>
      </div>
   );
};

export default PlatformIcons;