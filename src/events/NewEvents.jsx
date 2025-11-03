import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import StaticGradientBackground from '../components/StaticGradientBackground.jsx';
import Calendar from 'react-calendar';
import Slider from 'react-slick';
import { events } from "../data/data";
import 'react-calendar/dist/Calendar.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Events.css';

const NewEvents = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeFilter, setActiveFilter] = useState('All');

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  const filterOptions = ['All', 'Competitions', 'Workshops', 'Seminars'];

  const filteredEvents = activeFilter === 'All' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <StaticGradientBackground />
      <div className="relative w-full" style={{ zIndex: 50 }}>
        <Navbar />
      </div>
      
      <div className="p-8 flex flex-col items-center relative" style={{ zIndex: 10 }}>
        {/* Page Title */}
        <h1 
          className="text-center text-4xl md:text-[3rem] mb-4" 
          style={{ 
            marginTop: '5rem', 
            marginBottom: '2rem', 
            userSelect: 'none', 
            fontFamily: 'Cabin, sans-serif' 
          }}
        >
          <span className="text-[#0065A5]">&lt; </span>
          <span className="text-[#00FFAF] text-3xl sm:text-5xl"> Upcoming Events </span>
          <span className="text-[#0065A5]">&gt;</span>
        </h1>

        {/* Carousel and Calendar Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center w-full max-w-7xl mb-12">
          {/* Carousel */}
          <div className="w-full lg:w-2/3 flex justify-center">
            <div className="w-full max-w-4xl">
              <Slider {...carouselSettings}>
                {events.slice(0, 3).map((event, index) => (
                  <div key={index} className="px-2">
                    <div 
                      className="relative w-full rounded-lg overflow-hidden transition-all duration-300 group"
                      style={{ margin: '8px 0px' }}
                    >
                      <div 
                        className="absolute inset-0 rounded-lg overflow-hidden"
                        style={{
                          backgroundImage: `url("${event.image}")`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center center'
                        }}
                      ></div>
                      <div className="relative z-10 p-8 flex flex-col justify-between h-[500px] bg-gradient-to-t from-black/85 via-transparent to-transparent rounded-lg">
                        <div className="flex-1"></div>
                        <div className="flex flex-col justify-end space-y-3">
                          <h3 
                            className="text-white font-bold text-2xl leading-tight transition-colors duration-200"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                          >
                            {event.title}
                          </h3>
                          <div className="flex items-center">
                            <div className="flex items-center text-green-400 text-base">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path>
                              </svg>
                              <span className="font-medium">{event.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-gray-200 text-base">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <span className="font-medium">{event.prize || 'No Prize Listed'}</span>
                            </div>
                          </div>
                          <div className="flex gap-3 pt-2">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-sm">
                              Learn More
                            </button>
                            <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-lg transition-all duration-200 text-sm shadow-lg hover:shadow-xl transform hover:scale-105">
                              Register
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Calendar */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center lg:justify-end lg:pl-8">
            <div className="w-full max-w-sm">
              <div className="calendar-container">
                <Calendar
                  onChange={setSelectedDate}
                  value={selectedDate}
                  className="custom-calendar"
                />
                <p className="mt-2 text-center text-white">
                  Selected: {selectedDate.toDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 mt-6 event-tabs-section">
          <div className="gap-1 md:gap-5" style={{ margin: '1rem auto', position: 'relative', width: 'max-content', display: 'flex' }}>
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-tab text-[10px] sm:text-base ${activeFilter === filter ? 'active' : ''}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Event Count */}
        <div className="mb-6 text-center">
          <span className="text-gray-300 text-sm">
            Showing 1-{filteredEvents.length} of {filteredEvents.length} events
          </span>
        </div>

        {/* Event Mini Cards */}
        <div className="w-full max-w-7xl" style={{ marginBottom: '96px' }}>
          <div className="event-mini-cards event-mini-cards-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredEvents.map((event, index) => (
                <div
                  key={index}
                  className="relative w-full rounded-xl overflow-hidden transition-all duration-300 group cursor-pointer hover:ring-4 hover:ring-green-400/50 hover:ring-offset-4 hover:ring-offset-transparent hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-400/20"
                >
                  <div 
                    className="absolute inset-0 rounded-xl overflow-hidden"
                    style={{
                      backgroundImage: `url("${event.image}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center'
                    }}
                  ></div>
                  <div className="relative z-10 p-4 flex flex-col justify-between h-80 bg-gradient-to-t from-black/85 via-transparent to-transparent rounded-xl">
                    <div className="flex-1"></div>
                    <div className="flex flex-col justify-end space-y-2">
                      <h3 
                        className="text-white font-bold text-lg leading-tight transition-colors duration-200 group-hover:text-green-400"
                        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                      >
                        {event.title}
                      </h3>
                      <div className="flex items-center">
                        <div className="flex items-center text-green-400 text-sm">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path>
                          </svg>
                          <span className="font-medium text-xs">{event.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center text-gray-200">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <span className="font-medium truncate">{event.prize || 'No Prize'}</span>
                        </div>
                      </div>
                      <div className="flex gap-1 pt-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-2 rounded text-xs transition-all duration-200">
                          Learn More
                        </button>
                        <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-1 px-2 rounded text-xs transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewEvents;
