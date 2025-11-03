import { teamMembers } from "../data/data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StaticGradientBackground from "../components/StaticGradientBackground";
import './Team.css';

const Team = () => {
    return (
        <div className="min-h-screen relative overflow-x-hidden">
        <StaticGradientBackground />
        <div className="relative w-full" style={{ zIndex: 50 }}>
          <Navbar />
        </div>
        <div className="p-10 min-h-screen w-full px-4 pt-32 pb-20 overflow-hidden text-white relative" style={{ zIndex: 10, fontFamily: 'Cabin, sans-serif' }}>
          
          {/* Page Title */}
          <h1 className="text-center text-4xl md:text-[3rem] mb-4">
            <span className="text-[#0065A5]">&lt; </span>
            <span className="text-[#00FFAF]">Meet Our Geeks</span>
            <span className="text-[#0065A5]"> &gt;</span>
          </h1>
          <p className="text-center text-lg md:text-xl mb-15 text-[#A6A6A6]">
            The Hardworkers behind the Success of{' '}
            <span className="text-[#00895E]">
              Geeks<span className="text-[#0065A5]">for</span>Geeks
            </span>
          </p>

          {/* Faculty Coordinator Section */}
          <p className="flex justify-center text-4xl mb-10 mt-16 text-white">Faculty Coordinator</p>
          <div className="flex flex-wrap justify-center gap-14 mb-10">
            <div className="group w-80 h-60 [perspective:1200px]">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl shadow-lg [backface-visibility:hidden] bg-[#011725] text-white">
                  <img
                    alt="Dr. Ajay Prakash B V"
                    className="w-32 h-32 rounded-full border-4 border-white mb-3 object-cover object-center"
                    src="/assets/team/devi_mam.jpg"
                  />
                  <h2 className="text-xl font-bold">Dr. Ajay Prakash B V</h2>
                  <p className="text-base font-semibold text-[#00FFAF]">HOD - Dept of AIML</p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 rounded-2xl shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
                  <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-500 transform transition-transform duration-700 group-hover:-translate-x-full"></div>
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-green-500 transform transition-transform duration-700 group-hover:translate-x-full"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
                    <h3 className="text-lg font-bold">Connect with Dr. Ajay Prakash</h3>
                    <div className="flex gap-4">
                      <a href="https://linkedin.com/in" target="_blank" rel="noopener noreferrer" className="bg-[#0077B5] hover:bg-[#005885] text-white p-2 rounded-lg transition transform hover:scale-110">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                        </svg>
                      </a>
                      <a href="https://instagram.com/in" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white p-2 rounded-lg transition transform hover:scale-110">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Team Section */}
          <p className="flex justify-center text-4xl mb-10 mt-16 text-white">Core Team</p>
          <div className="flex flex-wrap justify-center gap-14 mb-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="group w-80 h-60 [perspective:1200px]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl shadow-lg [backface-visibility:hidden] bg-[#011725] text-white">
                    <img
                      alt={member.name}
                      className="w-32 h-32 rounded-full border-4 border-white mb-3 object-cover object-top"
                      src={member.img_link}
                    />
                    <h2 className="text-xl font-bold">{member.name}</h2>
                    <p className="text-base font-semibold text-[#00FFAF]">{member.position}</p>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 rounded-2xl shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-500 transform transition-transform duration-700 group-hover:-translate-x-full"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-green-500 transform transition-transform duration-700 group-hover:translate-x-full"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
                      <h3 className="text-lg font-bold">Connect with {member.name.split('.')[1] || member.name}</h3>
                      <div className="flex gap-4">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="bg-[#0077B5] hover:bg-[#005885] text-white p-2 rounded-lg transition transform hover:scale-110">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                          </svg>
                        </a>
                        <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white p-2 rounded-lg transition transform hover:scale-110">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Team;
