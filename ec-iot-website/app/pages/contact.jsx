import React from 'react';
import { useState } from 'react';

const Contact = () => {
  const [hovered, setHovered] = useState(null);
  
  const coordinators = [
    {
      name: "Ashutosh Rath",
      role: "Coordinator",
      email: "coordinator@example.com",
      linkedin: "https://www.linkedin.com/in/ashutosh-rath-a6438928b/"
    },
    {
      name: "Prantik Basu",
      role: "Co-coordinator",
      email: "co-coordinator@example.com",
      linkedin: "https://www.linkedin.com/in/basuprantik/"
    }
  ];
  
  const contactMethods = [
    {
      id: 'email',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'electronics.club.iitism@gmail.com',
      link: 'mailto:electronics.club.iitism@gmail.com',
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      id: 'instagram',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      label: 'Instagram',
      value: '@electronicsandiotclubiitism',
      link: 'https://www.instagram.com/electronicsandiotclubiitism/',
      color: 'bg-pink-50 text-pink-700 border-pink-200'
    },
    {
      id: 'linkedin',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'Electronics & IOT Club, IITISM Dhanbad',
      link: 'https://www.linkedin.com/company/electronics-club-iitism-dhanbad/',
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 py-8 px-6 text-center">
          <h1 className="text-3xl font-bold text-white tracking-wide">CONTACT US</h1>
          <p className="mt-2 text-blue-100">We'd love to hear from you!</p>
        </div>
        
        <div className="p-8">
          {/* Club */}
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-6 text-center">Club Contact Information</h2>
          <div className="space-y-6 max-w-lg mx-auto mb-12">
            {contactMethods.map((method) => (
              <a 
                key={method.id}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${method.color} ${hovered === method.id ? 'transform translate-y-[-2px]' : ''}`}
                onMouseEnter={() => setHovered(method.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex-shrink-0">{method.icon}</div>
                <div className="ml-4">
                  <p className="text-sm font-medium">{method.label}</p>
                  <p className="text-sm">{method.value}</p>
                </div>
              </a>
            ))}
          </div>
            {/* Coordinators */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-6 text-center">Our Team</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {coordinators.map((coordinator, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-center">
                  <h3 className="font-medium text-lg text-gray-900">{coordinator.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{coordinator.role}</p>
                  <div className="flex justify-center space-x-4 mt-3">
                    <a 
                      href={`mailto:${coordinator.email}`} 
                      className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {coordinator.email}
                    </a>
                  </div>
                  <div className="mt-2">
                    <a 
                      href={coordinator.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-sm text-gray-600 hover:text-blue-700 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;