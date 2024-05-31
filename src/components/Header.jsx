import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow w-full">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold text-gray-700">
            <Link href="/">
              <p className="text-gray-800">Woodbae</p>
            </Link>
          </div>
          <nav className="flex space-x-4">
            <Link href="/"><p className="text-gray-800">Home</p></Link>
            <Link href="/about"><p className="text-gray-800">About Us</p></Link>
            <Link href="/projects"><p className="text-gray-800">Projects</p></Link>
            <Link href="/contact"><p className="text-gray-800">Contact Us</p></Link>
          </nav>
          <Link href="/contact"><p className="text-gray-800 border px-4 py-2 rounded-md">Get in Touch</p></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
