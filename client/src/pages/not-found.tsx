import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  School,
  Trophy,
  AlertCircle,
  Zap 
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-ping"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 text-6xl opacity-20 animate-bounce delay-500">🚀</div>
      <div className="absolute top-32 right-32 text-4xl opacity-20 animate-bounce delay-1000">⭐</div>
      <div className="absolute bottom-20 left-32 text-5xl opacity-20 animate-bounce delay-700">🌟</div>
      <div className="absolute bottom-32 right-20 text-3xl opacity-20 animate-bounce delay-300">✨</div>

      <div className="relative z-10 w-full max-w-4xl mx-4 text-center">
        {/* Main 404 Display */}
        <div className="mb-8">
          <div className="relative inline-block">
            <h1 className="text-9xl md:text-[12rem] font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              404
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent blur-lg opacity-50 animate-pulse">
              <span className="text-9xl md:text-[12rem] font-black">404</span>
            </div>
          </div>
        </div>

        {/* Glitch Effect Text */}
        <div className="mb-8 relative">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-bounce">
            Oops! Page Not Found
          </h2>
          <div className="absolute inset-0 text-4xl md:text-6xl font-bold text-red-500 opacity-20 animate-ping">
            Oops! Page Not Found
          </div>
        </div>

        {/* Error Icon with Animation */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-spin">
              <AlertCircle className="h-12 w-12 text-white" />
            </div>
            <div className="absolute inset-0 w-24 h-24 border-4 border-red-400 rounded-full animate-ping opacity-30"></div>
            <div className="absolute -inset-2 w-28 h-28 border-2 border-pink-400 rounded-full animate-pulse opacity-20"></div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
            Looks like you've ventured into the <span className="text-purple-400 font-semibold">digital void</span>!
          </p>
          <p className="text-lg text-gray-400 mb-6">
            The page you're looking for might have been moved, deleted, or perhaps never existed in this dimension.
          </p>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 inline-block">
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span className="text-yellow-400">Dev Tip:</span> Did you forget to add this route to your router?
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-3">
            <GraduationCap className="h-5 w-5 group-hover:animate-bounce" />
            Go Home
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>

          <button className="group relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-3">
            <BookOpen className="h-5 w-5 group-hover:animate-pulse" />
            Portfolio
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>

          <button className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-green-500/25 flex items-center gap-3">
            <School className="h-5 w-5 group-hover:animate-spin" />
            Education
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>

          <button className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center gap-3">
            <Trophy className="h-5 w-5 group-hover:animate-bounce" />
            Achievements
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Fun Interactive Element */}
        <div className="group">
          <div className="inline-block bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 cursor-pointer">
            <p className="text-gray-400 text-sm mb-2">Lost in space? 🚀</p>
            <div className="flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse group-hover:animate-bounce"
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2 group-hover:text-purple-400 transition-colors">
              Click me for good luck! ✨
            </p>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            "Not all who wander are lost, but this page definitely is." 
            <span className="text-purple-400 ml-2">- Anonymous Developer</span>
          </p>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-purple-500/30 animate-pulse"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-pink-500/30 animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-cyan-500/30 animate-pulse"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-green-500/30 animate-pulse"></div>
    </div>
  );
}