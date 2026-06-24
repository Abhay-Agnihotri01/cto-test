import React from 'react'
import { 
  LayoutDashboard, 
  BookOpen, 
  BarChart3, 
  Users, 
  Plus, 
  Bell, 
  MoreVertical, 
  Edit3, 
  BarChart, 
  Upload, 
  FileText,
  Star,
  Play
} from 'lucide-react'
import { Link } from 'react-router-dom'

const InstructorDashboard = () => {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen flex font-sans">
      {/* Sidebar Navigation */}
      <nav className="w-64 bg-white border-r border-slate-200 flex flex-col sticky top-0 h-screen hidden md:flex">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 w-8 h-8 rounded-lg flex items-center justify-center text-white">
              <Star size={18} fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Nexus <span className="text-indigo-600">Academy</span></span>
          </Link>
          
          <div className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-medium">
              <LayoutDashboard size={20} />
              Overview
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
              <BookOpen size={20} />
              My Courses
            </a>
            <Link to="/instructor/analytics" className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
              <BarChart3 size={20} />
              AI Analytics
            </Link>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors">
              <Users size={20} />
              Students
            </a>
          </div>
        </div>
        
        <div className="mt-auto p-4 border-t border-slate-100">
          <button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold py-2.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all">
            <Plus size={20} />
            New Course
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold font-lexend italic">Instructor Portal</h1>
            <p className="text-slate-500 mt-1">Manage your content and track student success.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-white border border-slate-200 p-2.5 rounded-full text-slate-500 hover:text-indigo-600 transition-colors relative shadow-sm">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 bg-white p-1 pr-4 rounded-full border border-slate-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold overflow-hidden">
                <img src="https://api.dicebear.com/7.x/initials/svg?seed=JD" alt="JD" />
              </div>
              <span className="text-sm font-bold whitespace-nowrap">Prof. Jane Doe</span>
            </div>
          </div>
        </header>

        {/* Top Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Students</p>
            <h3 className="text-3xl font-bold mt-2">1,284</h3>
            <p className="text-xs text-emerald-500 font-bold mt-2 flex items-center gap-1">
              <span className="text-sm">↑</span> 12% this month
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Mastery Rate</p>
            <h3 className="text-3xl font-bold mt-2">76%</h3>
            <p className="text-xs text-slate-400 font-medium mt-2">AI-verified proficiency</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">AI Tutor Activity</p>
            <h3 className="text-3xl font-bold mt-2">8.4k</h3>
            <p className="text-xs text-indigo-500 font-bold mt-2">Interactions saved 120 hrs</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Avg. Course Rating</p>
            <h3 className="text-3xl font-bold mt-2">4.9 / 5</h3>
            <div className="flex gap-1 mt-2 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </div>
        </div>

        {/* Main Dashboard Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
          {/* Left: Course List & Content Management */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h2 className="text-xl font-bold font-lexend">Your Active Courses</h2>
                <div className="flex gap-2">
                  <button className="text-xs font-bold text-slate-500 px-3 py-1 bg-slate-50 rounded-lg transition-colors hover:bg-slate-100">Drafts</button>
                  <button className="text-xs font-bold text-indigo-600 px-3 py-1 bg-indigo-50 rounded-lg transition-colors hover:bg-indigo-100">Published</button>
                </div>
              </div>
              <div className="divide-y divide-slate-50">
                {/* Course Item 1 */}
                <div className="p-6 flex items-center gap-6 group hover:bg-slate-50/50 transition-colors">
                  <div className="w-20 h-14 bg-indigo-900 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=200" alt="React" className="w-full h-full object-cover opacity-60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-800 truncate">Advanced React Patterns</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-xs text-slate-400">8 Chapters</span>
                      <span className="text-xs text-slate-400">428 Students</span>
                      <span className="text-xs text-emerald-500 font-bold flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        Live
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                    <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-indigo-600 border border-transparent hover:border-slate-100 shadow-sm transition-all">
                      <Edit3 size={18} />
                    </button>
                    <Link to="/instructor/analytics" className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-indigo-600 border border-transparent hover:border-slate-100 shadow-sm transition-all">
                      <BarChart size={18} />
                    </Link>
                  </div>
                </div>
                {/* Course Item 2 */}
                <div className="p-6 flex items-center gap-6 group hover:bg-slate-50/50 transition-colors">
                  <div className="w-20 h-14 bg-violet-900 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=200" alt="Typescript" className="w-full h-full object-cover opacity-60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-800 truncate">Mastering TypeScript</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-xs text-slate-400">12 Chapters</span>
                      <span className="text-xs text-slate-400">856 Students</span>
                      <span className="text-xs text-emerald-500 font-bold flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        Live
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                    <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-indigo-600 border border-transparent hover:border-slate-100 shadow-sm transition-all">
                      <Edit3 size={18} />
                    </button>
                    <Link to="/instructor/analytics" className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-indigo-600 border border-transparent hover:border-slate-100 shadow-sm transition-all">
                      <BarChart size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h2 className="text-xl font-bold font-lexend">Video Library</h2>
                <button className="text-xs font-bold text-indigo-600 px-4 py-2 bg-indigo-50 rounded-xl transition-all hover:bg-indigo-100">+ Upload Video</button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 group cursor-pointer hover:border-indigo-300 hover:bg-indigo-50/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-400 group-hover:text-indigo-600 shadow-sm transition-colors">
                    <Upload size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-700">Drag and drop lessons here</p>
                    <p className="text-xs text-slate-400 mt-0.5">MP4, MOV up to 2GB. AI will auto-process transcripts.</p>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <Play size={16} fill="currentColor" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">01_intro_to_hoc.mp4</span>
                    </div>
                    <span className="text-emerald-500 font-bold text-xs bg-emerald-50 px-2 py-1 rounded-lg">Processed ✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <Play size={16} fill="currentColor" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">02_render_props_deepdive.mp4</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-indigo-600 h-full w-2/3 animate-pulse"></div>
                      </div>
                      <span className="text-indigo-600 font-bold italic text-[10px] uppercase tracking-wider">AI Processing...</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                      <Star size={20} className="text-indigo-300" fill="currentColor" />
                    </div>
                    <span className="text-indigo-300 font-bold uppercase tracking-widest text-xs font-lexend">New Feature</span>
                  </div>
                  <h2 className="text-2xl font-bold font-lexend">AI Content Assistant</h2>
                  <p className="text-indigo-100/70 mt-3 max-w-md leading-relaxed">Let Nexus AI help you generate quiz questions, summaries, and transcripts from your video uploads instantly.</p>
                  <button className="mt-8 bg-white text-indigo-900 font-bold py-3.5 px-8 rounded-xl shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-0.5 transition-all">Launch Editor</button>
                </div>
                <div className="hidden lg:block">
                  <div className="w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/10 group-hover:scale-105 transition-transform duration-700">
                    <FileText size={64} className="text-white/80" />
                  </div>
                </div>
              </div>
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-indigo-600 rounded-full blur-[100px] opacity-20"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-violet-600 rounded-full blur-[100px] opacity-20"></div>
            </section>
          </div>

          {/* Right: AI Analytics Deep Dive */}
          <div className="space-y-8">
            <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
              <h3 className="font-bold text-slate-800 mb-6 font-lexend">Student Mastery Heatmap</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-400 uppercase mb-2">
                    <span>Advanced Hooks</span>
                    <span className="text-indigo-600">92% Mastery</span>
                  </div>
                  <div className="h-2.5 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 w-[92%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-400 uppercase mb-2">
                    <span>Server Components</span>
                    <span className="text-amber-500">45% Mastery</span>
                  </div>
                  <div className="h-2.5 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                    <div className="h-full bg-amber-500 w-[45%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-400 uppercase mb-2">
                    <span>Edge Middleware</span>
                    <span className="text-indigo-600">78% Mastery</span>
                  </div>
                  <div className="h-2.5 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 w-[78%]"></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100/50">
                <div className="flex gap-3">
                  <div className="bg-indigo-600 p-1 rounded h-fit mt-0.5">
                    <BarChart size={12} className="text-white" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    <span className="font-bold text-indigo-700 not-italic">AI Insight:</span> 12% of students are dropping off at Chapter 4. Suggested action: Add an interactive AI quiz to bridge the knowledge gap.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
              <h3 className="font-bold text-slate-800 mb-2 font-lexend">Top AI Queries</h3>
              <p className="text-xs text-slate-400 mb-6">What your students are asking the AI Tutor.</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl text-sm border border-slate-100 group cursor-default hover:bg-white hover:shadow-sm transition-all">
                  <span className="font-medium text-slate-700 truncate mr-4">"Explain useMemo vs useCallback"</span>
                  <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-lg">142x</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl text-sm border border-slate-100 group cursor-default hover:bg-white hover:shadow-sm transition-all">
                  <span className="font-medium text-slate-700 truncate mr-4">"How to deploy to Vercel?"</span>
                  <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-lg">98x</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl text-sm border border-slate-100 group cursor-default hover:bg-white hover:shadow-sm transition-all">
                  <span className="font-medium text-slate-700 truncate mr-4">"Why is my state not updating?"</span>
                  <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-lg">86x</span>
                </div>
              </div>
              <button className="w-full mt-6 text-sm font-bold text-indigo-600 hover:underline py-2 transition-all">View Detailed Transcript Logs</button>
            </section>
          </div>

        </div>
      </main>
    </div>
  )
}

export default InstructorDashboard
