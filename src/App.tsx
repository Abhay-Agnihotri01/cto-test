import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">N</span>
          </div>
          <span className="text-xl font-bold tracking-tight">Nexus Academy</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-indigo-600 transition-colors">Courses</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">AI Lab</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Community</a>
        </div>
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-16 md:py-24 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Master Tech Skills with <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
            AI-Powered Learning
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          The hybrid learning platform that combines expert video instruction with personalized AI tutoring for 10x faster mastery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200">
            Explore Courses
          </button>
          <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm">
            Watch Demo
          </button>
        </div>
      </header>

      {/* Vision Features */}
      <main className="px-6 py-16 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors group">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3">Smart Classroom</h2>
            <p className="text-slate-600 leading-relaxed">
              Experience side-by-side learning with expert videos and a real-time AI Tutor that answers questions instantly.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-violet-100 transition-colors group">
            <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-600 group-hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9l-.707.707M16.243 4.243l-.707.707M12 18a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3">Personalized Paths</h2>
            <p className="text-slate-600 leading-relaxed">
              AI analyzes your progress to create a custom study roadmap, skipping what you know and focusing on mastery.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-100 transition-colors group">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3">AI Assessments</h2>
            <p className="text-slate-600 leading-relaxed">
              Don't just watch, do. AI-generated quizzes and coding challenges ensure you truly understand the material.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto px-6 py-12 bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-white">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-[10px] font-bold">N</span>
            </div>
            <span className="font-bold tracking-tight">Nexus Academy</span>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Nexus Academy.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
