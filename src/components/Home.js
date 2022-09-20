import React from 'react'
import '../helper/Home.css'
import Product  from './Product'
import HomeCarousel from './HomeCarousel'

// import HomeBlock from './HomeBlock'
function Home() {
  return (
    <div className='home'>
    <HomeCarousel  />
    <div className="home_row overlap_margin">
    <Product id="1"  imageSrc="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61p1tcPeU4L._SX450_.jpg" title="Acer Nitro Qg221Q 21.5 Inch (54.61 cm) Led 1920 X 1080 Pixels Full Hd Gaming Monitor I Va Panel I 1 Ms Response, 75 Hz Refresh Rate I 250 Nits Brightness I AMD Free Sync I Eye Care Features (Black)"
    price={11999} rating={4} />
    <Product id="2"  imageSrc="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71YgLwrSBHL._SL1000_.jpg" title="No Worries - Creative thoughts quotes laptop skin Motivational laptop sticker Laptop skin for 15.6inch/14inch laptops"
    price={299} rating={3} />
    </div>
    <div className="home_row">
    <Product id="3"  imageSrc="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71SAHzzQqkL._SX679_.jpg" title="2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Green (4th Generation)"
    price={54999} rating={4} />
    <Product id="4"  imageSrc="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71fp5ankbqL._SX679_.jpg" title="Apple Watch Series 5 (GPS + Cellular, 44mm) - Space Gray Aluminium Case with Black Sport Band"
    price={299} rating={3} />
    <Product id="5"  imageSrc="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71YgLwrSBHL._SL1000_.jpg" title="No Worries - Creative thoughts quotes laptop skin Motivational laptop sticker Laptop skin for 15.6inch/14inch laptops"
    price={299} rating={3} />
    </div>
    <div className="home_row">
    <Product id="6"  imageSrc="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71FzdaQBE3L._SX522_.jpg" title="Mi 125.7 cm (50 inches) 5X Series 4K Ultra HD LED Smart Android TV L50M6-ES (Grey)"
    price={44999} rating={4} />
    <Product id="7"  imageSrc="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51tbcILVglL._SX300_SY300_QL70_FMwebp_.jpg" title="Lenovo Legion 5 AMD Ryzen 7 5800H 15.6 (39.62cm) FHD IPS Gaming Laptop"
    price={69999} rating={4} />
    <Product id="8"  imageSrc="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61vhwbKd3bL._SX522_.jpg" title="Amazfit GTS2 Mini (New Version) Smart Watch with Always-on AMOLED Display, Alexa Built-in, SpO2, 14 Days' Battery Life, 68 Sports Modes, GPS, HR, Sleep & Stress Monitoring (Breeze Blue)
"
    price={5499} rating={3} />
    </div>
    </div>
    
  )
}

export default Home