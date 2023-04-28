import React from 'react'
import Image from 'next/image';
import banner from 'public/banner.webp';

// banner url
//https://api.eezee.sg/image/resize?height=385&width=984&url=https://storage.googleapis.com/eezee-banner-images/4lIFLboZl0EEIGm1t3W25m.jpg&resizeStrategy=cover

const Banner = () => {
  return (
    <Image src={banner} alt="banner" className="m-auto mt-4"/>
  )
}

export default Banner