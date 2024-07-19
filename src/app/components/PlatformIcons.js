import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PlatformIcons = ({heading}) => {
   const icons1 = [
      {
         link: '/hulu-adblocker',
         icon: '/Hulu.png'
      },
      {
         link: 'youtube-adblocker',
         icon: '/youtube.png'
      },
      {
         link: '/twitch-adblocker',
         icon: '/twitch.png'
      },
      {
         link: '/spotify-adblocker',
         icon: '/Spotify.png'
      }
   ]
   const icons2 = [
      {
         link: '/hulu-adblocker',
         icon: '/Hulu.png'
      },
      {
         link: 'youtube-adblocker',
         icon: '/youtube.png'
      },
      {
         link: '/twitch-adblocker',
         icon: '/twitch.png'
      },
      {
         link: '/spotify-adblocker',
         icon: '/Spotify.png'
      }
   ]
   const icons3 = [
      {
         link: '/hulu-adblocker',
         icon: '/Hulu.png'
      },
      {
         link: 'youtube-adblocker',
         icon: '/youtube.png'
      },
      {
         link: '/twitch-adblocker',
         icon: '/twitch.png'
      },
      {
         link: '/spotify-adblocker',
         icon: '/Spotify.png'
      }
   ]
   const icons4 = [
      {
         link: '/hulu-adblocker',
         icon: '/Hulu.png'
      },
      {
         link: 'youtube-adblocker',
         icon: '/youtube.png'
      },
      {
         link: '/twitch-adblocker',
         icon: '/twitch.png'
      },
      {
         link: '/spotify-adblocker',
         icon: '/Spotify.png'
      }
   ]
   const icons = [...icons1, ...icons2, ...icons3, ...icons4]
   return (
      <div className='pb-20'>
         <div className='text-white text-[6rem] font-semibold text-center pb-16 tracking-wide'>{heading?heading:'All in One'}</div>
         <div className="slider w-[340px] md:w-full">
            <div className="slide-track">
               {
                  icons?.map((item, ind) => (
                     <div className="slide pl-10" key={ind}>
                        <Link href={item.link}>
                           <Image className={`cursor-pointer ${item.icon === "/Hulu.png" ? 'w-[180px]' : ''}`} src={item.icon} quality={100} height="100" width="250" alt="" />
                        </Link>
                     </div>
                  ))
               }
            </div>
         </div>
      </div>
   );
};

export default PlatformIcons;