import React from 'react';

export default function Header() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 flex flex-wrap items-center">
            <ul className="flex flex-wrap items-center space-x-4">
              <li className="relative group">
                <button className="flex items-center space-x-1 focus:outline-none">
                  <i className="fal fa-globe-stand"></i> 
                  <span>Language</span>
                  <i className="fas fa-chevron-down ml-1"></i>
                </button>
                <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="p-2 border-b border-gray-200">Language</div>
                  <ul>
                    <li>
                      <a href="https://www.enteselektronik.com/" className="block px-4 py-2 hover:bg-gray-100">
                        <img src="https://www.entes.eu/templates/images/flags/de.svg" width="16" alt="deutsch" className="inline-block mr-2"/> Deutsch
                      </a>
                    </li>
                    <li>
                      <a href="https://www.entes.com.tr/" className="block px-4 py-2 hover:bg-gray-100">
                        <img src="https://www.entes.eu/templates/images/flags/tr.svg" width="16" alt="turkish" className="inline-block mr-2"/> Turkish
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <a href="tel:+90 (216) 313 0110" className="hidden md:inline-block">
                  <i className="fal fa-phone"></i> +90 (216) 313 0110
                </a>
                <a href="tel:+90 (216) 313 0110" className="md:hidden flex items-center justify-center">
                  <i className="fas fa-phone"></i>
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="mailto:contact@entes.eu" className="hidden md:inline-block">
                  <i className="fal fa-envelope"></i> contact@entes.eu
                </a>
                <a href="mailto:contact@entes.eu" className="md:hidden flex items-center justify-center">
                  <i className="fas fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 flex justify-end">
            <ul className="flex items-center space-x-4">
              <li className="hidden lg:inline-block"><a href="/about-us/" title="About Us" className="hover:underline">About Us</a></li>
              <li className="hidden lg:inline-block"><a href="https://www.entes.eu/uploads/contents/file/en-katalog-2023-64db70c22016a.pdf" target="_blank" title="Catalogue" className="hover:underline">Catalogue</a></li>
              <li className="hidden lg:inline-block"><a href="/contact/#technical-support" className="scroll hover:underline" title="Technical Support">Technical Support</a></li>
              <li className="hidden lg:inline-block"><a href="https://www.enermedic.com/" target="_blank" title="Enermedic" className="hover:underline">Enermedic</a></li>
              <li className="relative">
                <a href="#" title="Search" className="flex items-center" id="searchToggleBtn">
                  <i className="fal fa-search"></i> <span className="ml-1">Search</span>
                </a>
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg hidden" id="searchBox">
                  <form action="" method="post" className="flex p-2">
                    <input type="text" name="keyword" className="form-input w-full p-2 border border-gray-300 rounded-l" placeholder="What are you looking for?" />
                    <button type="submit" className="btn bg-blue-500 text-white p-2 rounded-r">Search</button>
                    <div className="closeSearch flex items-center justify-center cursor-pointer p-2" id="closeSearch">
                      <i className="fal fa-times"></i>
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
