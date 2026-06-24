import React from 'react'
import { 
  LayoutDashboard, 
  BookOpen, 
  Zap, 
  Settings, 
  Bell, 
  Flame, 
  PlayCircle,
  TrendingUp,
  X,
  CheckCircle2
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen flex font-sans">
      {/* Sidebar Navigation */}
      <nav className="w-64 bg-white border-r border-slate-200 flex flex-col sticky top-0 h-screen hidden md:flex">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 w-8 h-8 rounded-lg flex items-center justify-center text-white">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight">Nexus <span className="text-indigo-600">Academy</span></span>
          </Link>
          
          <div className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-medium">
              <LayoutDashboard size={20} />
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
              <BookOpen size={20} />
              My Courses
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
              <Zap size={20} />
              AI Lab
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
              <Settings size={20} />
              Settings
            </a>
          </div>
        </div>
        
        <div className="mt-auto p-4 border-t border-slate-100">
          <div className="bg-indigo-900 rounded-xl p-4 text-white relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-1">Go Pro</p>
              <p className="text-sm font-medium mb-3 leading-tight">Unlock AI Tutoring & Personal Paths</p>
              <button className="bg-white text-indigo-900 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-indigo-50 transition-colors">Upgrade Now</button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-500 rounded-full blur-2xl opacity-50"></div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold font-lexend">Welcome back, Alex! 👋</h1>
            <p className="text-slate-500 mt-1">You have 2 lessons to complete today.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors">
                <Bell size={20} />
              </button>
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-200 border border-slate-300 overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" />
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-sm font-medium text-slate-500">Course Progress</p>
            <h3 className="text-2xl font-bold mt-1">68% <span className="text-emerald-500 text-sm font-medium ml-2">+5% this week</span></h3>
            <div className="mt-4 bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-indigo-600 h-full w-[68%]"></div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-sm font-medium text-slate-500">Learning Streak</p>
            <h3 className="text-2xl font-bold mt-1">12 Days 🔥</h3>
            <div className="mt-4 flex gap-1.5">
              {[...Array(7)].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-indigo-600' : i < 5 ? 'bg-indigo-300' : 'bg-slate-200'}`}></div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-medium text-slate-500">AI Interactions</p>
            <h3 className="text-2xl font-bold mt-1">142 <span className="text-slate-400 text-sm font-normal">queries</span></h3>
            <p className="text-xs text-slate-400 mt-4 leading-tight">AI Tutor has saved you ~4.5 hours of research.</p>
          </div>
        </div>

        {/* Continue Learning */}
        <section className="mb-10">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-xl font-bold font-lexend">Continue Learning</h2>
            <a href="#" className="text-indigo-600 text-sm font-bold hover:underline transition-all">View All</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Course Card */}
            <Link to="/classroom" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group cursor-pointer hover:shadow-md transition-all">
              <div className="h-40 bg-indigo-900 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400" alt="React" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-all">
                    <PlayCircle size={28} className="text-white" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">45% Done</div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded uppercase tracking-wider">Advanced</span>
                </div>
                <h4 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">Advanced React Patterns</h4>
                <p className="text-xs text-slate-500 mt-1 leading-tight">Next: Higher Order Components</p>
              </div>
            </Link>
            
            {/* Course Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group cursor-pointer hover:shadow-md transition-all">
              <div className="h-40 bg-violet-900 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400" alt="Typescript" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-all">
                    <PlayCircle size={28} className="text-white" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">12% Done</div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-violet-600 bg-violet-50 px-2 py-0.5 rounded uppercase tracking-wider">Intermediate</span>
                </div>
                <h4 className="font-bold text-slate-800 group-hover:text-violet-600 transition-colors">Mastering TypeScript</h4>
                <p className="text-xs text-slate-500 mt-1 leading-tight">Next: Generics & Utility Types</p>
              </div>
            </div>

            {/* Personal Path Card */}
            <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 flex flex-col justify-between group cursor-pointer hover:border-indigo-500 transition-all">
              <div>
                <div className="bg-gradient-to-br from-indigo-600 to-violet-600 w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4">
                  <TrendingUp size={24} />
                </div>
                <h4 className="font-bold text-white text-lg">AI Generated Path</h4>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">Personalized "Fullstack Architect" roadmap based on your goals.</p>
              </div>
              <button className="mt-6 w-full py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold hover:bg-indigo-700 transition-colors">Continue Path</button>
            </div>
          </div>
        </section>

        {/* Recommended for you */}
        <section>
          <h2 className="text-xl font-bold mb-6 font-lexend">Smart Recommendations</h2>
          <div className="bg-white border border-indigo-100 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl flex-shrink-0 flex items-center justify-center text-white shadow-lg shadow-indigo-100">
              <Zap size={32} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-bold text-slate-800 italic leading-relaxed">"Since you're learning Advanced React, you might struggle with Node.js Performance. Want me to add it to your path?"</h4>
              <p className="text-sm text-slate-500 mt-1">— Nexus AI Tutor</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-6 py-2.5 border border-slate-200 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors">Dismiss</button>
              <button className="flex-1 md:flex-none px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg text-sm font-bold shadow-md hover:opacity-90 transition-all">Yes, add it</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
