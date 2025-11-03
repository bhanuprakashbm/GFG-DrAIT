import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StaticGradientBackground from "../components/StaticGradientBackground";
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <StaticGradientBackground />
      <div className="relative w-full" style={{ zIndex: 50 }}>
        <Navbar />
      </div>
      
      <div className="otherpage1-content min-h-screen text-white flex flex-col items-center gap-10 py-20 px-4 justify-center relative" style={{ zIndex: 10 }}>
        {/* Page Title */}
        <h1 
          className="text-center mt-10" 
          style={{ 
            fontFamily: 'Cabin, sans-serif', 
            textAlign: 'center', 
            userSelect: 'none', 
            fontSize: '60px' 
          }}
        >
          <span className="text-[#0065A5]">&lt; </span>
          <span className="text-[#00FFAF]"> About Us </span>
          <span className="text-[#0065A5]">&gt;</span>
        </h1>

        {/* Our Motto Card */}
        <div 
          className="text-center hover:cursor-pointer transform transition-transform duration-300 hover:scale-105 flex-1 lg:min-w-[580px] max-w-[420px] bg-[#002B46] rounded-[20px] border border-[#004C7C] p-6 flex flex-col"
          style={{ height: '374px' }}
        >
          <h2 className="text-[#00FFF2] text-[32px] font-bold font-[Cabin] mb-4">
            Our Motto
          </h2>
          <p className="text-white text-[18px] font-[Cabin] font-normal overflow-y-auto">
            Quality is not an act, it is a habit.
          </p>
          <p className="text-right md:mr-20">~ Aristotle</p>
        </div>

        {/* Vision and Mission Cards */}
        <div className="tracking-wider flex flex-col lg:flex-row gap-8 justify-center items-stretch w-full max-w-[1400px] px-4">
          {/* Our Vision */}
          <div 
            className="hover:cursor-pointer transform transition-transform duration-300 hover:scale-105 flex-1 min-w-[280px] max-w-[420px] bg-[#002B46] rounded-[20px] border border-[#004C7C] p-6 flex flex-col"
            style={{ height: '374px' }}
          >
            <h2 className="text-[#00FFF2] text-[32px] font-bold font-[Cabin] mb-4">
              Our Vision
            </h2>
            <p className="text-white text-[17px] font-[Cabin] font-normal overflow-y-auto">
              At GFG Campus Body Dr Ambedkar Institute of Technology, Bengaluru, we aim to build a vibrant community of problem-solvers and programmers driven by curiosity and collaboration. We foster continuous learning, creativity, and inclusivity to empower students to innovate and create lasting technological impact.
            </p>
          </div>

          {/* Our Mission */}
          <div 
            className="hover:cursor-pointer transform transition-transform duration-300 hover:scale-105 flex-1 min-w-[280px] max-w-[420px] bg-[#002B46] rounded-[20px] border border-[#004C7C] p-6 flex flex-col"
            style={{ height: '374px' }}
          >
            <h2 className="text-[#00FFF2] text-[#32px] font-bold font-[Cabin] mb-4">
              Our Mission
            </h2>
            <p className="text-white text-[17px] font-[Cabin] font-normal overflow-y-auto">
              To shape Dr AIT Bengaluru's premier hub for complete growth—where ambitious students gain advanced technical skills, entrepreneurial insight, communication mastery, and leadership through exclusive projects, hackathons, and mentorship with masters of their fields.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
