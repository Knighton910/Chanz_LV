import album1 from "../../public/goget.png";
import album2 from "../../public/getit.png";
import album3 from "../../public/779Al.png";
import album4 from "../../public/money.png";
import album5 from "../../public/chanzAlbum.png";
import album6 from "../../public/warrior.png";
import myGif from "../../public/chanzGiff.gif";
import React from "react";
import Image from "next/image";

const Albums = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 bg-[#ecf0f3]">
      <h1 className="text-3xl sm:text-8xl text-black font-bold tracking-tight mb-10">
        My SoundCloud Albums
      </h1>
      <Image
        src={album1}
        alt="artist image"
        quality={100}
        priority
        className="w-full sm:w-2/3 md:w-2/1 mb-1 lg:w-2/3 mb-9"
      />
      <Image
        src={album2}
        alt="artist image"
        quality={100}
        priority
        className="w-full sm:w-2/3 md:w-2/1 mb-1 lg:w-2/3 mb-9"
      />
      <Image
        src={album3}
        alt="artist image"
        quality={100}
        priority
        className="w-full sm:w-2/3 md:w-2/1 mb-1 lg:w-2/3 mb-9"
      />
      <Image
        src={album4}
        alt="artist image"
        quality={100}
        priority
        className="w-full sm:w-2/3 md:w-2/1 mb-1 lg:w-2/3 mb-9"
      />
      <Image
        src={album5}
        alt="artist image"
        quality={100}
        priority
        className="w-full sm:w-2/3 md:w-2/1 mb-1 lg:w-2/3 mb-9"
      />
      <Image
        src={album6}
        alt="artist image"
        quality={100}
        priority
        className="w-full sm:w-2/3 md:w-2/1 mb-1 lg:w-2/3 mb-9"
      />

      <Image src={myGif} alt="gif" className="w-full" />
    </div>
  );
};

export default Albums;
