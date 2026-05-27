import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  MessageCircle,
  Linkedin,
  Droplets,
  Activity,
  Heart,
  Shield,
  Beaker,
  FlaskConical,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
      {
        image: "/public/imageslide2.jpeg",
        title: "Trusted Pathology & Diagnostic Center",
        subtitle:
          "Accurate results, compassionate care. Your health is our priority.",
      },
      {
        image: "/public/imageslide6.jpeg",
        title: "Advanced Diagnostic Technology",
        subtitle:
          "State-of-the-art equipment for precise and reliable testing.",
      },
      {
        image: "/public/imageslide3.jpeg",
        title: "Expert Medical Professionals",
        subtitle:
          "Our team of certified pathologists ensures quality you can trust.",
      },
        {
        image: "/public/imageslide4.jpeg",
        title: "Expert Medical Professionals",
        subtitle:
          "Our team of certified pathologists ensures quality you can trust.",
      },
          {
        image: "/public/imageslide5.jpeg",
        title: "Expert Medical Professionals",
        subtitle:
          "Our team of certified pathologists ensures quality you can trust.",
      },
          {
        image: "/public/imageslide6.jpeg",
        title: "Expert Medical Professionals",
        subtitle:
          "Our team of certified pathologists ensures quality you can trust.",
      },
    ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const tests = [
    { icon: Droplets, name: 'Blood Test', description: 'Complete blood profile analysis', tests: '50+ Parameters' },
    { icon: Activity, name: 'Thyroid Test', description: 'TSH, T3, T4 thyroid panel', tests: '6 Parameters' },
    { icon: Heart, name: 'Diabetes Test', description: 'HbA1c, Fasting & PP Glucose', tests: '4 Parameters' },
    { icon: Beaker, name: 'CBC', description: 'Complete blood count analysis', tests: '24 Parameters' },
    { icon: Shield, name: 'Vitamin D Test', description: '25-Hydroxy Vitamin D level', tests: '2 Parameters' },
    { icon: FlaskConical, name: 'Liver Function Test', description: 'Comprehensive liver panel', tests: '12 Parameters' },
  ];

  const packages = [
    {
      name: 'Basic Health Package',
      price: '699',
      originalPrice: '1500',
      description: 'Essential health screening for everyone',
      tests: ['CBC', 'Blood Sugar', 'Lipid Profile', 'Liver Function', 'Kidney Function', 'Thyroid (TSH)','Iron Profile', 'Urine RM'],
      popular: false,
    },
    {
      name: 'Full Body Checkup',
      price: '1699',
      originalPrice: '3200',
      description: 'Comprehensive health assessment',
      tests: ['All Basic Package Tests', 'Vitamin D', 'Vitamin B12', 'Iron Profile', 'Urine Analysis', 'HBA1c','CRP','RA Factor'],
      popular: true,
    },
    {
      name: 'Diabetes Package',
      price: '1299',
      originalPrice: '2000',
      description: 'Complete diabetes monitoring panel',
      tests: ['HbA1c', 'Fasting Glucose', 'PP Glucose', 'Insulin', 'Kidney Function', 'Lipid Profile'],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            <div className="flex items-center gap-2">
          {/* Logo Image */}
            <div className="w-20 h-30 flex items-center justify-center">
              <img
                src="public/imageLogo.png"
                alt="Lab Logo"
                className="w-full h-full object-contain"
              />
            </div>
              <div>
                <span className="text-2xl font-bold  text-[#16A34A]">Saraswati Good</span>
                <span className="text-2xl font-bold text-[#1E3A8A]"> Lab</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('tests')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Tests
              </button>
              <button onClick={() => scrollToSection('packages')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Packages
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </button>
           <button
                  onClick={() =>
                     window.open(
                      "https://wa.me/919410044144?text=Hello%20I%20want%20to%20book%20a%20test",
                      "_blank"
                    )
  
                  }
                  className="bg-gradient-to-r from-cyan-500 to-[#1E3A8A] text-white px-6 py-2.5 rounded-full font-medium hover:from-cyan-600 hover:to-[#172554] transition-all shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-0.5"
                >
                  Book Test
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('tests')} className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors">
                Tests
              </button>
              <button onClick={() => scrollToSection('packages')} className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors">
                Packages
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors">
                Contact
              </button>
              <button
                onClick={() => window.open("https://wa.me/919410044144?text=Hello, I want to book a test",
                              "_blank")}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-medium mt-4"
              >
                Book Test
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Carousel Section */}
      <section id="home" className="relative h-screen pt-18">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/50 via-[#1E3A8A]/35 to-transparent z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    currentSlide === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8 absolute'
                  }`}
                >
                 {currentSlide === index && (
                    <>
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6 border border-cyan-300/30">
                        <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                        Trusted Reports
                      </div>

                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        {slide.title}
                      </h1>

                      <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
                        {slide.subtitle}
                      </p>

                      <div className="flex flex-wrap gap-4">
                        
                        {/* Book Test Button */}
                        <button
                          onClick={() =>
                            window.open(
                              "https://wa.me/919410044144?text=Hello, I want to book a test",
                              "_blank"
                            )
                          }
                          className="bg-gradient-to-r from-cyan-500 to-[#1E3A8A] text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-[#172554] transition-all shadow-2xl hover:shadow-cyan-500/30 flex items-center gap-2 group"
                        >
                          Book Your Test
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        {/* Explore Button */}
                        <button
                          onClick={() => scrollToSection("tests")}
                          className="border-2 border-cyan-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-cyan-500/10 hover:border-cyan-300 transition-all"
                        >
                          Explore Tests
                        </button>

                      </div>
                    </>
                  )}
                  
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-4">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-20 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">10+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">30K+</div>
                <div className="text-sm text-gray-600 mt-1">Tests Conducted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">200+</div>
                <div className="text-sm text-gray-600 mt-1">Test Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Now Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-900 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Book Your Test?
              </h2>
              <p className="text-lg text-blue-100 max-w-xl">
                Get instant booking support through WhatsApp. Our team will guide you through the entire process.
              </p>
            </div>
            <button
              onClick={() =>  window.open(
                              "https://wa.me/919410044144?text=Hello, I want to book a test",
                              "_blank"
                            )}
              className="group flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Book Now on WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Tests List Section */}
      <section id="tests" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Activity className="w-4 h-4" />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Pathology Tests
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of diagnostic tests with accurate results and quick turnaround time.
            </p>
          </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {tests.map((test, index) => (
    <div
      key={index}
      className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-cyan-400 hover:-translate-y-1"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:from-cyan-100 group-hover:to-blue-200 transition-colors">
        <test.icon className="w-6 h-6 text-[#1E3A8A]" />
      </div>

      <h3 className="text-lg font-bold text-[#1E3A8A] mb-1">
        {test.name}
      </h3>

      <p className="text-sm text-gray-600 mb-3">
        {test.description}
      </p>

      <div className="inline-flex items-center gap-1 text-sm text-cyan-600 font-medium">
        <CheckCircle2 className="w-4 h-4" />
        {test.tests}
      </div>
    </div>
  ))}
</div>
          
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Heart className="w-4 h-4" />
              Health Packages
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Health Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our curated health packages designed for complete health assessment at affordable prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  pkg.popular
                    ? 'border-blue-500 transform -translate-y-4'
                    : 'border-gray-100 hover:border-blue-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-900 text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">Rs {pkg.price}</span>
                    <span className="text-lg text-gray-400 line-through">Rs {pkg.originalPrice}</span>
                  </div>
                  <p className="text-sm text-green-600 font-medium mt-1">Save Rs {parseInt(pkg.originalPrice) - parseInt(pkg.price)}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.tests.map((test, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{test}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => window.open(`https://wa.me/919410044144?text=Hello, I want to book a test ${pkg.name}`, '_blank')}
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-900 to-blue-900 text-white hover:from-blue-900 hover:to-blue-800 shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-blue-900 hover:text-white'
                  }`}
                >
                  Book Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                About Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Partner in Healthcare Diagnostics
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                 Saraswati Good Lab is a trusted pathology and diagnostic center dedicated to providing accurate and reliable healthcare testing services. We are committed to delivering quality diagnostics with advanced technology, hygienic practices, and patient-focused care to ensure trustworthy medical reports for every patient.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-blue-900" />
                    </div>
                    <span className="font-bold text-gray-900">Certified</span>
                  </div>
                  <p className="text-sm text-gray-600">Certified quality standards</p>
                </div>
                <div className="bg-white p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-bold text-gray-900">Fast Reports</span>
                  </div>
                  <p className="text-sm text-gray-600">Same day & next day delivery</p>
                </div>
                <div className="bg-white p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-bold text-gray-900">Home Collection</span>
                  </div>
                  <p className="text-sm text-gray-600">Free sample pickup</p>
                </div>
                <div className="bg-white p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Activity className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-bold text-gray-900">Expert Team</span>
                  </div>
                  <p className="text-sm text-gray-600">Certified pathologists</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="public/imageimg12.jpeg"
                alt="Medical Laboratory"
                className="rounded-2xl shadow-xl w-50 h-50 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4" />
              Our Location
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Diagnostic Center
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of the city with easy access and ample parking space.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.156153503933!2d79.42602907772822!3d28.387704632779187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a006e36195f261%3A0x8356af341a4b8346!2sGulmohar%20Park%2C%20Central%20Bareilly!5e1!3m2!1sen!2sin!4v1779880355634!5m2!1sen!2sin"
                  height="400"
                  width="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title=" Saraswati Good Life Pathology Lab Location"
                />
              </div>
            </div>
            <div>
              <div className="bg-gray-50 rounded-2xl p-6 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">C-145, First Floor. Jagdish vihar, Near Gulmohar Park, Rajendra Nagar, Bareilly U.P.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+91 9410044144</p>
                      <p className="text-gray-600">+91 9457429921</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">sglpathology@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                      <p className="text-gray-600">Mon - Sat: 8:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Sunday: 8:00 AM - 3:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <img
                    src="public/imageLogo.png"
                    alt="Lab Logo"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <span className="text-xl font-bold">SARASWATI GOOD LIFE PATHOLOGY</span>
                  <span className="text-xl font-bold text-blue-400"> Lab</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner in healthcare diagnostics. Providing accurate and reliable pathology services.
              </p>
              <div className="flex gap-4">
                
                <a
                  href="https://www.instagram.com/saraswati_good_life_pathology?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/919410044144?text=Hello, I want to book a test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('tests')} className="text-gray-400 hover:text-white transition-colors">
                    Our Tests
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('packages')} className="text-gray-400 hover:text-white transition-colors">
                    Health Packages
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Popular Tests</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => window.open('https://wa.me/WhatsApp?text=Hello, I want to book a Blood Test', '_blank')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blood Test
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>      window.open(
                      "https://wa.me/919410044144?text=Hello%20I%20want%20to%20book%20a%20test",
                      "_blank"
                    )}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Thyroid Test
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>      window.open(
                      "https://wa.me/919410044144?text=Hello%20I%20want%20to%20book%20a%20test",
                      "_blank"
                    )}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Diabetes Test
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>      window.open(
                      "https://wa.me/919410044144?text=Hello%20I%20want%20to%20book%20a%20test",
                      "_blank"
                    )}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Vitamin D Test
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Get In Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400">+91 9410044144</span>
                      <span className="text-gray-400">+91 9457429921</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400">sglpathol@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">C-145, First Floor. Jagdish vihar, Near Gulmohar Park, Rajendra Nagar, Bareilly U.P.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400">Mon-Sat: 8AM-8PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} SGL Pathology. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
