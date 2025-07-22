import React from 'react';
import { PenTool, Sparkles, Users, Globe, Info, Mail, Star } from 'lucide-react';

interface WelcomePageProps {
  onLoginClick: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onLoginClick }) => {
  const [showModal, setShowModal] = React.useState<string | null>(null);

  const handleFeatureClick = (feature: string) => {
    setShowModal(feature);
  };

  const handleNavClick = (section: string) => {
    setShowModal(section);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0">
        <img 
          src="/WhatsApp Image 2025-07-12 at 8.56.33 PM copy.jpeg" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/60 to-indigo-900/70"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <PenTool className="w-8 h-8 text-blue-400" />
            </div>
            <span className="text-white font-semibold text-lg">Blog Nest</span>
          </div>
          <div className="hidden md:flex space-x-6 text-white/80">
            <span 
              onClick={() => handleNavClick('features')}
              className="hover:text-white transition-colors cursor-pointer hover:bg-white/10 px-3 py-2 rounded-lg"
            >
              Features
            </span>
            <span 
              onClick={() => handleNavClick('about')}
              className="hover:text-white transition-colors cursor-pointer hover:bg-white/10 px-3 py-2 rounded-lg"
            >
              About
            </span>
            <span 
              onClick={() => handleNavClick('contact')}
              className="hover:text-white transition-colors cursor-pointer hover:bg-white/10 px-3 py-2 rounded-lg"
            >
              Contact
            </span>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            {/* Logo Animation */}
            <div className="flex items-center justify-center mb-8 animate-bounce">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <PenTool className="w-16 h-16 text-blue-400" />
                </div>
              </div>
            </div>
            
            {/* Main Title with Enhanced Typography */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Blog Nest
              </span>
            </h1>
            
            {/* Subtitle with Animation */}
            <p className="text-xl md:text-3xl lg:text-4xl mb-12 font-light tracking-wide text-gray-200 animate-fade-in-up">
              Let's connect and create 
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold"> amazing blogs!</span>
            </p>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <div 
                onClick={() => handleFeatureClick('ai-powered')}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">AI-Powered</h3>
                <p className="text-gray-300 text-sm">Smart writing assistance</p>
              </div>
              <div 
                onClick={() => handleFeatureClick('multi-language')}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <Globe className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Multi-Language</h3>
                <p className="text-gray-300 text-sm">6 languages supported</p>
              </div>
              <div 
                onClick={() => handleFeatureClick('community')}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Community</h3>
                <p className="text-gray-300 text-sm">Connect with writers</p>
              </div>
            </div>
            
            {/* Enhanced CTA Button */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-50 animate-pulse"></div>
              <button
                onClick={onLoginClick}
                className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 
                         text-white font-bold py-5 px-16 rounded-full text-xl transition-all duration-500 
                         transform hover:scale-110 shadow-2xl hover:shadow-blue-500/50 border border-white/20
                         backdrop-blur-sm group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Writing
                  <Sparkles className="w-5 h-5 ml-2 group-hover:animate-spin" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-6 text-center text-white/60">
          <p>&copy; 2025 Blog Nest. Crafted with ❤️ for writers worldwide.</p>
        </footer>
      </div>

      {/* Modal for Features and Navigation */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white capitalize">{showModal.replace('-', ' ')}</h2>
              <button
                onClick={closeModal}
                className="text-white/60 hover:text-white text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                ×
              </button>
            </div>
            
            {showModal === 'features' && (
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Sparkles className="w-8 h-8 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Writing</h3>
                    <p className="text-gray-300">Get intelligent suggestions, grammar corrections, and content enhancement powered by advanced AI technology.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="w-8 h-8 text-green-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Multi-Language Support</h3>
                    <p className="text-gray-300">Write in 6 different languages: English, Telugu, Hindi, Tamil, Malayalam, and Kannada with native language support.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Writer Community</h3>
                    <p className="text-gray-300">Connect with fellow writers, share your work, get feedback, and collaborate on amazing content.</p>
                  </div>
                </div>
              </div>
            )}
            
            {showModal === 'about' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Info className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">About Blog Nest</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Blog Nest is a revolutionary blogging platform designed to empower writers from all backgrounds and languages. 
                  Our mission is to break down language barriers and create a global community of storytellers.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Founded in 2025, we believe that every voice deserves to be heard, regardless of the language they speak. 
                  With cutting-edge AI technology and intuitive design, we make blogging accessible and enjoyable for everyone.
                </p>
                <div className="bg-white/5 rounded-xl p-4 mt-6">
                  <h4 className="text-white font-semibold mb-2">Our Vision</h4>
                  <p className="text-gray-300 text-sm">To create the world's most inclusive and innovative blogging platform where creativity knows no boundaries.</p>
                </div>
              </div>
            )}
            
            {showModal === 'contact' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Email Support</h4>
                    <div className="space-y-1">
                      <p className="text-blue-400">aswininarava003@gmail.com</p>
                      <p className="text-blue-400">nirupamasanjana@gmail.com</p>
                      <p className="text-blue-400">mohanatiyaala@gmail.com</p>
                    </div>
                    <p className="text-gray-300 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Business Inquiries</h4>
                    <div className="space-y-1">
                      <p className="text-blue-400">aswininiarava@gmail.com</p>
                      <p className="text-blue-400">nirupamasanjana@gmail.com</p>
                    </div>
                    <p className="text-gray-300 text-sm mt-1">For partnerships and collaborations</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Community</h4>
                    <p className="text-gray-300">Join our Discord server for real-time support and community discussions</p>
                    <button 
                      onClick={() => window.open('https://discord.gg/blognest', '_blank')}
                      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                    >
                      Join Discord
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {showModal === 'ai-powered' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">AI-Powered Features</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">✨ Smart Writing Assistant</h4>
                    <p className="text-gray-300 text-sm">Get real-time suggestions for better word choices, sentence structure, and content flow.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">🔍 Grammar & Style Checker</h4>
                    <p className="text-gray-300 text-sm">Advanced grammar checking with style recommendations tailored to your writing voice.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">🎯 Content Optimization</h4>
                    <p className="text-gray-300 text-sm">AI-powered insights to improve readability, engagement, and SEO performance.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">💡 Topic Suggestions</h4>
                    <p className="text-gray-300 text-sm">Never run out of ideas with AI-generated topic suggestions based on trends and your interests.</p>
                  </div>
                </div>
              </div>
            )}
            
            {showModal === 'multi-language' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">Multi-Language Support</h3>
                </div>
                <p className="text-gray-300 mb-4">Write and publish in your native language with full support for:</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <h4 className="text-white font-semibold">🇺🇸 English</h4>
                    <p className="text-gray-300 text-sm">Global reach</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <h4 className="text-white font-semibold">🇮🇳 Telugu</h4>
                    <p className="text-gray-300 text-sm">తెలుగు భాష</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <h4 className="text-white font-semibold">🇮🇳 Hindi</h4>
                    <p className="text-gray-300 text-sm">हिंदी भाषा</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <h4 className="text-white font-semibold">🇮🇳 Tamil</h4>
                    <p className="text-gray-300 text-sm">தமிழ் மொழி</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <h4 className="text-white font-semibold">🇮🇳 Malayalam</h4>
                    <p className="text-gray-300 text-sm">മലയാളം ഭാഷ</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <h4 className="text-white font-semibold">🇮🇳 Kannada</h4>
                    <p className="text-gray-300 text-sm">ಕನ್ನಡ ಭಾಷೆ</p>
                  </div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mt-4">
                  <p className="text-blue-300 text-sm">✨ Each language comes with native font support, spell-checking, and cultural context awareness!</p>
                </div>
              </div>
            )}
            
            {showModal === 'community' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">Writer Community</h3>
                </div>
                <p className="text-gray-300 mb-4">Join thousands of writers from around the world:</p>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">👥 Connect & Collaborate</h4>
                    <p className="text-gray-300 text-sm">Find writing partners, join groups, and collaborate on projects with writers who share your interests.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">📝 Feedback & Reviews</h4>
                    <p className="text-gray-300 text-sm">Get constructive feedback on your work and help others improve their writing skills.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">🏆 Writing Challenges</h4>
                    <p className="text-gray-300 text-sm">Participate in monthly writing challenges, contests, and themed events to push your creativity.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">📚 Learning Resources</h4>
                    <p className="text-gray-300 text-sm">Access writing tutorials, workshops, and masterclasses from experienced authors and industry experts.</p>
                  </div>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 mt-4">
                  <p className="text-purple-300 text-sm">🌟 Premium members get access to exclusive events, one-on-one mentoring, and advanced analytics!</p>
                </div>
              </div>
            )}
            
            <div className="mt-8 text-center">
              <button
                onClick={closeModal}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.5s both;
        }
      `}</style>
    </div>
  );
};

export default WelcomePage;