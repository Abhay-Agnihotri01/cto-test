import React, { useState } from 'react'
import { 
  ChevronLeft, 
  LayoutDashboard, 
  BookOpen, 
  Play, 
  Pause, 
  Settings, 
  Download, 
  Sparkles, 
  Send,
  Lock,
  Clock,
  Maximize2,
  Volume2
} from 'lucide-react'
import { Link } from 'react-router-dom'

const SmartClassroom = () => {
  const [isAIPanelOpen, setIsAIPanelOpen] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  const lessons = [
    { id: 1, title: 'Higher Order Components', duration: '12:04', active: true, locked: false },
    { id: 2, title: 'Render Props', duration: '08:45', active: false, locked: false },
    { id: 3, title: 'Compound Components', duration: '15:20', active: false, locked: true },
    { id: 4, title: 'Hooks vs HOCs', duration: '10:15', active: false, locked: true },
  ]

  return (
    <div className="bg-slate-50 text-slate-900 h-screen flex flex-col font-sans overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between z-20">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-slate-500 hover:text-slate-900 transition-colors">
            <ChevronLeft size={24} />
          </Link>
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 w-8 h-8 rounded-lg flex items-center justify-center text-white">
              <Sparkles size={18} fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:inline">Nexus <span className="text-indigo-600">Academy</span></span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-4">
            <Link to="/dashboard" className="text-slate-600 hover:text-slate-900 font-medium">Dashboard</Link>
            <span className="text-slate-600 hover:text-slate-900 font-medium border-b-2 border-indigo-600 pb-1">My Courses</span>
          </nav>
          <div className="w-10 h-10 rounded-full bg-slate-200 border border-slate-300 overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden relative">
        
        {/* Left: Course Navigation (Sidebar) */}
        <aside className="w-64 bg-white border-r border-slate-200 flex flex-col hidden lg:flex">
          <div className="p-4 border-b border-slate-100">
            <h3 className="font-semibold text-xs uppercase text-slate-500 tracking-wider">Advanced React Patterns</h3>
            <div className="mt-3">
              <div className="flex justify-between text-xs mb-1 font-medium">
                <span className="text-slate-600">Progress</span>
                <span className="text-indigo-600">45%</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full transition-all duration-500" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto py-2">
            {lessons.map((lesson) => (
              <div 
                key={lesson.id}
                className={`px-4 py-3 flex items-center justify-between cursor-pointer transition-colors ${
                  lesson.active ? 'bg-indigo-50 border-r-4 border-indigo-600' : 'hover:bg-slate-50'
                } ${lesson.locked ? 'opacity-50 grayscale' : ''}`}
              >
                <div className="flex flex-col gap-0.5">
                  <span className={`text-sm font-medium ${lesson.active ? 'text-indigo-700' : 'text-slate-700'}`}>
                    {lesson.id}. {lesson.title}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{lesson.duration}</span>
                </div>
                {lesson.locked && <Lock size={14} className="text-slate-400" />}
              </div>
            ))}
          </div>
        </aside>

        {/* Center: Video Player & Transcription */}
        <section className="flex-1 flex flex-col bg-slate-900 overflow-y-auto custom-scrollbar">
          {/* Video Container */}
          <div className="aspect-video w-full bg-black flex items-center justify-center relative group overflow-hidden">
            {/* Placeholder for Video */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-40"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md transition-all group-hover:scale-110"
              >
                {isPlaying ? <Pause size={40} className="text-white fill-white" /> : <Play size={40} className="text-white fill-white ml-2" />}
              </button>
              <span className="text-white font-medium mt-4 tracking-wide shadow-sm">Click to {isPlaying ? 'pause' : 'play'} lesson</span>
            </div>
            
            {/* Custom Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
              <div className="w-full h-1.5 bg-white/30 rounded-full relative cursor-pointer">
                <div className="absolute inset-y-0 left-0 bg-indigo-500 w-1/3 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-white">
                  <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-indigo-400 transition-colors">
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                  <span className="text-xs font-mono">04:20 / 12:04</span>
                  <Volume2 size={20} className="hover:text-indigo-400 transition-colors cursor-pointer" />
                </div>
                <div className="flex items-center gap-4 text-white">
                  <button className="px-2 py-0.5 rounded border border-white/40 text-[10px] font-bold hover:bg-white/20 transition-all uppercase tracking-tighter">CC</button>
                  <Maximize2 size={18} className="hover:text-indigo-400 transition-colors cursor-pointer" />
                  <Settings size={18} className="hover:text-indigo-400 transition-colors cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Info & Transcription */}
          <div className="flex-1 bg-white p-6 md:p-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                   <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded uppercase tracking-wider">Advanced Pattern</span>
                </div>
                <h2 className="text-3xl font-bold font-lexend text-slate-900 leading-tight">1. Higher Order Components</h2>
                <p className="text-slate-500 mt-2 text-lg">Master the art of component composition to create highly reusable UI logic.</p>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-sm font-bold transition-all text-slate-700">
                <Download size={18} />
                Resources
              </button>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-bold text-xl font-lexend border-b border-slate-100 pb-3 flex items-center gap-2">
                <Clock size={20} className="text-indigo-600" />
                Lesson Transcript
              </h3>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100/50">
                  <span className="bg-indigo-600 text-white px-2 py-0.5 rounded font-mono text-xs mr-3">00:45</span> 
                  "So, what exactly is a Higher Order Component? At its core, an HOC is a function that takes a component and returns a new component. This pattern is incredibly powerful for handling cross-cutting concerns like authentication, data fetching, or even simple layout wrappers."
                </p>
                <p className="text-slate-400 leading-relaxed p-4 border border-transparent">
                  <span className="font-mono text-xs mr-3">01:12</span> 
                  "Think of it as a wrapper. Instead of repeating the same boilerplate logic in every single component, you abstract that logic into a single function that can enhance any component passed to it..."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Right: AI Tutor Panel */}
        <aside className={`bg-slate-50 border-l border-slate-200 flex flex-col transition-all duration-300 ease-in-out ${isAIPanelOpen ? 'w-96' : 'w-0 overflow-hidden border-l-0'}`}>
          <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between sticky top-0 z-10 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full flex items-center justify-center shadow-md">
                <Sparkles size={14} className="text-white" fill="currentColor" />
              </div>
              <h3 className="font-bold text-slate-800">AI Tutor</h3>
            </div>
            <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full uppercase tracking-tighter ring-1 ring-indigo-200/50">Pro</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
            {/* AI Welcome Message */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex-shrink-0 flex items-center justify-center text-white shadow-sm">
                <Sparkles size={16} fill="currentColor" />
              </div>
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-200/50">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Hi Alex! 👋 I'm analyzing the lesson in real-time. Feel free to ask anything about Higher Order Components or request a quick quiz to test your understanding!
                </p>
              </div>
            </div>
            
            {/* Suggested Prompts */}
            <div className="space-y-2">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest px-2">Suggestions</p>
              <div className="flex flex-wrap gap-2">
                {["Summarize lesson", "Show code example", "Quick quiz"].map((prompt) => (
                  <button key={prompt} className="text-xs bg-white border border-slate-200 px-4 py-2 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 transition-all shadow-sm">
                    "{prompt}"
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Chat Input */}
          <div className="p-4 bg-white border-t border-slate-200 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
            <div className="relative">
              <textarea 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 pr-14 resize-none transition-all placeholder:text-slate-400" 
                rows={2} 
                placeholder="Ask me anything..."
              ></textarea>
              <button className="absolute right-3 bottom-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-2 rounded-xl shadow-lg hover:shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all">
                <Send size={18} />
              </button>
            </div>
            <div className="mt-3 flex items-center gap-2 px-1">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">AI Sync: 04:20</span>
            </div>
          </div>
        </aside>

        {/* AI Panel Toggle Button (When closed or overlay) */}
        {!isAIPanelOpen && (
          <button 
            onClick={() => setIsAIPanelOpen(true)}
            className="absolute right-6 bottom-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-30"
          >
            <Sparkles size={24} fill="currentColor" />
          </button>
        )}
      </main>
    </div>
  )
}

export default SmartClassroom
