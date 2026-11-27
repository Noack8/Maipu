// src/components/CardCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Importamos los estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function CardCarousel({ items, title }) {
  return (
    <section className="carousel-section">
      <h2>{title}</h2>
      
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        // Configuración para que se mueva solo
        autoplay={{
          delay: 3000, // Se mueve cada 3 segundos
          disableOnInteraction: false, // Sigue moviéndose aunque el usuario lo toque
        }}
        // Puntitos de navegación
        pagination={{ clickable: true }}
        // Flechas para pasar de página
        navigation={true}
        // Cuántas tarjetas se ven según el tamaño de pantalla
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        // Clase personalizada para que Swiper agregue márgenes y no quede pegado
        className="my-swiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="success-card">
              {/* Aquí va la imagen */}
              <div className="card-image-placeholder">
                [Espacio para Imagen]
              </div>
              
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
              
              <button className="card-button">Ver más</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default CardCarousel;