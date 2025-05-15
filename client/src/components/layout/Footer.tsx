import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#5f72be] to-[#9b59b6] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-2">ZoneBrozStudios</h2>
            <p className="opacity-80">We Build Bold. Code Clean. Deliver Fast.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link href="/">
              <div className="hover:text-gray-200 transition-colors cursor-pointer">Home</div>
            </Link>
            <Link href="/about">
              <div className="hover:text-gray-200 transition-colors cursor-pointer">About</div>
            </Link>
            <Link href="/projects">
              <div className="hover:text-gray-200 transition-colors cursor-pointer">Projects</div>
            </Link>
            <Link href="/contact">
              <div className="hover:text-gray-200 transition-colors cursor-pointer">Contact</div>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-80 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} ZoneBrozStudios. All rights reserved.</p>
          <p className="opacity-80 text-sm">Designed with ❤️ in San Francisco</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
