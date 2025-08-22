export function SolarienBanner() {
  const handleVideoClick = () => {
    window.open('https://solarien.com.br', '_blank');
  };

  return (
    <div className="text-center my-5 relative overflow-hidden rounded-xl">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="max-w-[250px] h-auto block cursor-pointer mx-auto"
        poster="https://res.cloudinary.com/da1qwcv4u/image/upload/v1755888747/Sem_t%C3%ADtulo_15_xjbgpg.jpg"
        onClick={handleVideoClick}
      >
        <source src="https://res.cloudinary.com/da1qwcv4u/video/upload/v1755888747/Sem_t%C3%ADtulo_15_xjbgpg.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
    </div>
  );
}