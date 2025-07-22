import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { PenTool, LogOut, ChevronDown, Save, ArrowLeft, Globe, Calendar, User, BookOpen, Sparkles } from 'lucide-react';
import { LANGUAGES, Language, Blog } from '../types';

const MainPage: React.FC = () => {
  const { user, logout } = useAuth();
  const [showCreateBlog, setShowCreateBlog] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | ''>('');
  const [blogContent, setBlogContent] = useState('');
  const [blogTitle, setBlogTitle] = useState('');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [wordCount, setWordCount] = useState(0);
  const [isSaving, setIsSaving] = useState(false);

  const handleCreateBlog = () => {
    setShowCreateBlog(true);
  };

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setShowLanguageDropdown(false);
  };

  const handleContentChange = (content: string) => {
    setBlogContent(content);
    setWordCount(content.trim().split(/\s+/).filter(word => word.length > 0).length);
  };

  const handleSaveBlog = async () => {
    if (blogTitle.trim() && blogContent.trim() && selectedLanguage && user) {
      setIsSaving(true);
      
      // Simulate saving delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newBlog: Blog = {
        id: Date.now().toString(),
        title: blogTitle,
        content: blogContent,
        language: selectedLanguage,
        authorId: user.id,
        createdAt: new Date()
      };
      
      setBlogs(prev => [newBlog, ...prev]);
      setBlogTitle('');
      setBlogContent('');
      setSelectedLanguage('');
      setShowCreateBlog(false);
      setWordCount(0);
      setIsSaving(false);
    }
  };

  const handleBack = () => {
    setShowCreateBlog(false);
    setSelectedLanguage('');
    setBlogTitle('');
    setBlogContent('');
    setWordCount(0);
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/60 to-indigo-900/70"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 min-h-screen">
        {/* Enhanced Header */}
        <header className="p-6 backdrop-blur-sm bg-white/5 border-b border-white/10">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <PenTool className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Blog Nest</h1>
                <p className="text-gray-300 text-sm">Your creative writing space</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <User className="w-4 h-4 text-blue-400" />
                <span className="text-white text-sm">{user?.name}</span>
              </div>
              <button
                onClick={logout}
                className="flex items-center text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 hover:bg-white/20"
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </header>

        {!showCreateBlog ? (
          /* Enhanced Dashboard */
          <div className="p-6">
            {/* Welcome Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 animate-bounce">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Welcome {user?.name}!!
              </h2>
              <p className="text-2xl md:text-3xl text-gray-200 mb-8 font-light">
                Let's write a blog today
              </p>
              
              <button
                onClick={handleCreateBlog}
                className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
                         hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 
                         text-white font-bold py-5 px-16 rounded-full text-xl transition-all 
                         duration-500 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/50 
                         border border-white/20 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <PenTool className="w-6 h-6 mr-3" />
                  Create Blog
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="w-8 h-8 text-blue-400" />
                  <span className="text-3xl font-bold text-white">{blogs.length}</span>
                </div>
                <h3 className="text-white font-semibold">Total Blogs</h3>
                <p className="text-gray-300 text-sm">Published articles</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <Globe className="w-8 h-8 text-green-400" />
                  <span className="text-3xl font-bold text-white">{new Set(blogs.map(b => b.language)).size}</span>
                </div>
                <h3 className="text-white font-semibold">Languages</h3>
                <p className="text-gray-300 text-sm">Different languages used</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <Calendar className="w-8 h-8 text-purple-400" />
                  <span className="text-3xl font-bold text-white">
                    {blogs.filter(b => {
                      const today = new Date();
                      const blogDate = new Date(b.createdAt);
                      return blogDate.toDateString() === today.toDateString();
                    }).length}
                  </span>
                </div>
                <h3 className="text-white font-semibold">Today</h3>
                <p className="text-gray-300 text-sm">Blogs written today</p>
              </div>
            </div>

            {/* Recent Blogs */}
            {blogs.length > 0 && (
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-blue-400" />
                  Your Recent Blogs
                </h3>
                <div className="space-y-4">
                  {blogs.slice(0, 3).map((blog) => (
                    <div key={blog.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-xl font-semibold text-white">{blog.title}</h4>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                          {LANGUAGES.find(l => l.value === blog.language)?.label}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-3 line-clamp-2">{blog.content.substring(0, 150)}...</p>
                      <p className="text-gray-400 text-sm">{new Date(blog.createdAt).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Enhanced Blog Creation Interface */
          <div className="p-6">
            <div className="max-w-5xl mx-auto">
              {/* Back Button */}
              <button
                onClick={handleBack}
                className="mb-6 flex items-center text-white/80 hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Dashboard
              </button>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
                <h2 className="text-4xl font-bold text-white text-center mb-8 flex items-center justify-center">
                  <PenTool className="w-8 h-8 mr-3 text-blue-400" />
                  Create Your Blog
                </h2>
                
                {!selectedLanguage ? (
                  /* Enhanced Language Selection */
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-2xl text-gray-200 mb-8">
                      Choose your preferred language
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.value}
                          onClick={() => handleLanguageSelect(lang.value)}
                          className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-blue-500/50 
                                   text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 
                                   transform hover:scale-105 hover:shadow-lg backdrop-blur-sm group"
                        >
                          <div className="flex flex-col items-center">
                            <Globe className="w-6 h-6 mb-2 text-blue-400 group-hover:text-blue-300" />
                            {lang.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Enhanced Blog Writing Interface */
                  <div className="space-y-6">
                    {/* Language Header */}
                    <div className="flex items-center justify-between bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center">
                        <Globe className="w-5 h-5 text-blue-400 mr-3" />
                        <span className="text-lg text-gray-200">Writing in:</span>
                        <span className="text-blue-400 font-semibold ml-2 text-lg">
                          {LANGUAGES.find(l => l.value === selectedLanguage)?.label}
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedLanguage('')}
                        className="text-gray-300 hover:text-white transition-colors text-sm bg-white/10 px-3 py-1 rounded-lg"
                      >
                        Change Language
                      </button>
                    </div>
                    
                    {/* Title Input */}
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter your blog title..."
                        value={blogTitle}
                        onChange={(e) => setBlogTitle(e.target.value)}
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl 
                                 text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                                 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm 
                                 text-2xl font-semibold transition-all duration-300 hover:bg-white/15"
                      />
                    </div>
                    
                    {/* Content Textarea */}
                    <div className="relative">
                      <textarea
                        placeholder="Start writing your amazing blog..."
                        value={blogContent}
                        onChange={(e) => handleContentChange(e.target.value)}
                        rows={18}
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl 
                                 text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                                 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm 
                                 resize-none text-lg leading-relaxed transition-all duration-300 hover:bg-white/15"
                      />
                      
                      {/* Word Count */}
                      <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-gray-300 text-sm">{wordCount} words</span>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4 justify-center pt-4">
                      <button
                        onClick={handleSaveBlog}
                        disabled={!blogTitle.trim() || !blogContent.trim() || isSaving}
                        className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
                                 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 
                                 text-white font-semibold py-4 px-12 rounded-xl transition-all 
                                 duration-300 transform hover:scale-105 disabled:opacity-50 
                                 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/25 
                                 border border-white/20 group overflow-hidden"
                      >
                        {isSaving ? (
                          <div className="flex items-center">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                            Saving...
                          </div>
                        ) : (
                          <>
                            <span className="relative z-10 flex items-center">
                              <Save className="w-5 h-5 mr-2" />
                              Save Blog
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          </>
                        )}
                      </button>
                      
                      <button
                        onClick={handleBack}
                        className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-12 
                                 rounded-xl transition-all duration-300 border border-white/20 
                                 hover:border-white/40 backdrop-blur-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;