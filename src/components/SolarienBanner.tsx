export function SolarienBanner() {
  return (
    <div className="relative overflow-hidden rounded-xl h-full">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover min-h-[200px]"
        poster="https://res.cloudinary.com/da1qwcv4u/image/upload/v1755888747/Sem_t%C3%ADtulo_15_xjbgpg.jpg"
      >
        <source src="https://res.cloudinary.com/da1qwcv4u/video/upload/v1755888747/Sem_t%C3%ADtulo_15_xjbgpg.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <a 
          href="https://solarien.com.br" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-2.5 text-sm font-bold no-underline rounded-full shadow-lg hover:bg-green-600 transition-colors inline-block"
        >
          Acesse o Site
        </a>
      </div>
    </div>
  );
}