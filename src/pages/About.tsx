
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">About NOVA</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, NOVA started as a small passion project with a simple mission: to create high-quality, 
                sustainable fashion that doesn't compromise on style or ethics.
              </p>
              <p className="text-gray-600">
                Today, we've grown into a community of designers, creators, and customers who share our vision 
                for a more conscious approach to fashion. Every piece in our collection is thoughtfully designed 
                and responsibly made, with attention to detail and respect for our planet.
              </p>
            </div>
            <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 italic">Company Image</p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to minimizing our environmental impact through responsible sourcing, 
                  production methods, and packaging choices.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-2">Quality</h3>
                <p className="text-gray-600">
                  We believe in creating pieces that last, with careful attention to craftsmanship and materials.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-2">Community</h3>
                <p className="text-gray-600">
                  We value the relationships we build with our customers, partners, and the communities we touch.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((member) => (
                <div key={member} className="text-center">
                  <div className="bg-gray-100 h-48 w-48 mx-auto rounded-full mb-4 flex items-center justify-center">
                    <p className="text-gray-400 italic">Team Photo</p>
                  </div>
                  <h3 className="font-medium">Team Member {member}</h3>
                  <p className="text-gray-500 text-sm">Position</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
