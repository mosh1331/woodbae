import Link from "next/link";

const Hero = () => {
    return (
      <section className="relative bg-gray-800 text-white h-screen flex items-center justify-center w-full">
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold">Loading Soon</h1>
          <p className="mt-4 text-lg">Transforming Spaces with Elegance and Style</p>
          <Link href="/projects" className="mt-6 inline-block bg-blue-600 px-6 py-3 text-lg rounded-md">Explore Our Projects</Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </section>
    );
  };
  
  export default Hero;
  