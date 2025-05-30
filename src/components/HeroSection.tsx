
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Track Your Gadgets with Ease
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              View available devices, check their status, and keep track of your inventory all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Illustration Image */}
          <div className="lg:order-last order-first">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Gadget tracking illustration"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
