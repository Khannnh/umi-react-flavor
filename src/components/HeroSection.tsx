
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

          {/* Right Content - Code Screenshot */}
          <div className="lg:order-last order-first">
            <div className="relative">
              <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
                <div className="flex items-center space-x-2 px-4 py-3 bg-gray-800">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="p-6 text-sm font-mono">
                  <div className="text-purple-400">import</div>
                  <div className="text-blue-400 ml-4">{"{ useState, useEffect }"}</div>
                  <div className="text-purple-400">from</div>
                  <div className="text-green-400 ml-2">'react';</div>
                  <div className="mt-2 text-purple-400">const</div>
                  <div className="text-yellow-400 ml-2">GadgetTracker</div>
                  <div className="text-white ml-2">=</div>
                  <div className="text-blue-400 ml-2">() =></div>
                  <div className="text-white ml-2">{"{"}</div>
                  <div className="ml-4 mt-1 text-purple-400">const</div>
                  <div className="text-blue-400 ml-2">[devices, setDevices]</div>
                  <div className="text-white ml-2">=</div>
                  <div className="ml-4 text-yellow-400">useState</div>
                  <div className="text-white">([]);</div>
                  <div className="ml-4 mt-2 text-purple-400">return</div>
                  <div className="text-white ml-2">{"("}</div>
                  <div className="ml-6 mt-1 text-green-400">{"<div>"}</div>
                  <div className="ml-8 text-green-400">{"<h1>"}</div>
                  <div className="text-white">Track Gadgets</div>
                  <div className="text-green-400">{"</h1>"}</div>
                  <div className="ml-6 text-green-400">{"</div>"}</div>
                  <div className="ml-4 text-white">{")"}</div>
                  <div className="text-white">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
