modify import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft, Shield } from 'lucide-react';

interface LoginPageProps {
  onBack: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onBack }) => {
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (isLogin) {
      const success = login(formData.email, formData.password);
      if (!success) {
        setError('Invalid email or password');
      }
    } else {
      if (!formData.name || !formData.email || !formData.password) {
        setError('Please fill in all fields');
        setIsLoading(false);
        return;
      }
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters');
        setIsLoading(false);
        return;
      }
      const success = register(formData.name, formData.email, formData.password);
      if (!success) {
        setError('User with this email already exists');
      }
    }
    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <img 
          src="/WhatsApp Image 2025-07-12 at 8.56.33 PM copy.jpeg" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-indigo-900/80"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="mb-6 flex items-center text-white/80 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          {/* Main Card */}
          <div className="relative">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
            
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {isLogin ? 'Welcome Back!' : 'Join Blog Nest'}
                </h2>
                <p className="text-gray-300">
                  {isLogin ? 'Sign in to continue your writing journey' : 'Create your account to start blogging'}
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-400 transition-colors" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl 
                               text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                               focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm
                               transition-all duration-300 hover:bg-white/15"
                    />
                  </div>
                )}
                
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-400 transition-colors" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl 
                             text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                             focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm
                             transition-all duration-300 hover:bg-white/15"
                  />
                </div>
                
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-400 transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-xl 
                             text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                             focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm
                             transition-all duration-300 hover:bg-white/15"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                
                {error && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-3 text-red-300 text-sm text-center backdrop-blur-sm">
                    {error}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
                           hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 
                           text-white font-semibold py-4 rounded-xl transition-all duration-300 
                           transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                           shadow-lg hover:shadow-blue-500/25 border border-white/20 group overflow-hidden"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    <>
                      <span className="relative z-10">{isLogin ? 'Sign In' : 'Create Account'}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </>
                  )}
                </button>
              </form>
              
              {/* Switch Mode */}
              <div className="mt-8 text-center">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/20"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-transparent text-gray-400">
                      {isLogin ? 'New to Blog Nest?' : 'Already have an account?'}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setError('');
                    setFormData({ name: '', email: '', password: '' });
                  }}
                  className="mt-4 text-blue-400 hover:text-blue-300 font-semibold transition-colors 
                           hover:underline decoration-2 underline-offset-4"
                >
                  {isLogin ? 'Create new account' : 'Sign in instead'}
                </button>
              </div>

              {/* Demo Credentials */}
              {isLogin && (
                <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                  <p className="text-blue-300 text-sm text-center mb-2 font-semibold">Demo Credentials:</p>
                  <p className="text-blue-200 text-xs text-center">Email: john@example.com</p>
                  <p className="text-blue-200 text-xs text-center">Password: password123</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;