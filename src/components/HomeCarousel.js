import React from 'react'
    import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
    import {Carousel} from 'react-responsive-carousel';
    import '../helper/homeCarousel.css'
function HomeCarousel() {
  return (
        <div>
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false} showIndicators={false} stopOnHover={false} showArrows={false} useKeyboardArrows={true}>
        <div>
            <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71ofXEm4AdL._SX3000_.jpg" className='home_banner' alt=""/>
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71cp9PVuTfL._SX3000_.jpg" className='home_banner' alt=""/>
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61k2pydRT9L._SX3000_.jpg"  className='home_banner' alt=""/>
        </div>
    </Carousel>
    </div>
      
    
  )
}

export default HomeCarousel