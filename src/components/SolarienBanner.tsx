export function SolarienBanner() {
  const handleVideoClick = () => {
    window.open('https://solarien.com.br', '_blank');
  };

  return (
    <div className="text-center my-3 sm:my-5 relative overflow-hidden rounded-xl">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full max-w-[250px] sm:max-w-[300px] h-auto block cursor-pointer mx-auto"
        poster="https://res.cloudinary.com/da1qwcv4u/image/upload/v1755888747/Sem_t%C3%ADtulo_15_xjbgpg.jpg"
        onClick={handleVideoClick}
      >
        <source src="https://res.cloudinary.com/da1qwcv4u/video/upload/v1755888747/Sem_t%C3%ADtulo_15_xjbgpg.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
    </div>
  );
}