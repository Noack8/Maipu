import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CardCarousel.css';

function CardCarousel({ items, title, initialSlide = 0 }) {
  const safeInitialSlide = initialSlide < items.length ? initialSlide : 0;

  return (
    <section className="carousel-section">
      {title && <h3 className="carousel-subtitle">{title}</h3>}
      
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={40} 
        slidesPerView={1}
        loop={true}
        initialSlide={safeInitialSlide}
        speed={800}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
          1280: { slidesPerView: 4, spaceBetween: 40 },
        }}
        className="my-swiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={`${item.id}-${index}`}>
            <div className="success-card-vertical">
              <div className="card-image-vertical">
                <span>Imagen del Caso</span>
              </div>
              <div className="card-content-vertical">
                <h3>{item.titulo}</h3>
                <p>{item.descripcion}</p>
                <button 
                  className="card-button" 
                  onClick={() => onItemClick(item)} // <-- Pasa el item al hacer clic
                >
                  Ver más
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default CardCarousel;