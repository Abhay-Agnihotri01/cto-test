import React from 'react'
import { 
  ArrowLeft, 
  Search, 
  Download, 
  ChevronDown, 
  TrendingUp, 
  AlertTriangle, 
  MessageSquare, 
  User,
  Star,
  Activity,
  CheckCircle,
  FileText
} from 'lucide-react'
import { Link } from 'react-router-dom'

const InstructorAnalytics = () => {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-4 md:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between sticky top-0 z-50 gap-4">
        <div className="flex items-center gap-4">
          <Link to="/instructor" className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <div>
            <h1 className="text-xl font-bold font-lexend">
              AI Analytics: <span className="text-indigo-600">Advanced React Patterns</span>
            </h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Course Overview & Student Insights</p>
          </div>
        </div>
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:block">Reporting Period:</span>
          <div className="relative">
            <select className="appearance-none bg-slate-100 border-none rounded-xl text-sm font-bold pl-4 pr-10 py-2.5 focus:ring-2 focus:ring-indigo-500 cursor-pointer shadow-sm">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>All Time</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
        
        {/* Summary Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className="flex justify-between items-start relative z-10">
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Avg. Mastery Level</p>
                <h2 className="text-4xl font-bold mt-2 font-lexend">78.4%</h2>
              </div>
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center font-bold text-xl shadow-inner border border-emerald-200/50">
                A-
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-6 leading-relaxed italic relative z-10">
              Based on AI-generated assessment results across 428 active students.
            </p>
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-500">
              <CheckCircle size={100} />
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">AI Tutor Engagement</p>
              <h2 className="text-4xl font-bold mt-2 font-lexend">92%</h2>
              <div className="mt-6 flex items-center gap-2">
                <span className="text-emerald-500 font-bold text-sm flex items-center gap-1">
                  <TrendingUp size={16} /> ↑ 14%
                </span>
                <span className="text-slate-400 text-xs font-medium">more than course average</span>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-500">
              <MessageSquare size={100} />
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Predicted Completion</p>
              <h2 className="text-4xl font-bold mt-2 font-lexend">84%</h2>
              <p className="text-xs text-indigo-600 font-bold mt-6 flex items-center gap-2">
                <Activity size={14} /> +12% boost from AI intervention
              </p>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-500">
              <FileText size={100} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Student Struggle Points (AI Identified) */}
          <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <AlertTriangle size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold font-lexend">Struggle Hotspots</h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">AI-Identified Friction points</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100 relative overflow-hidden">
                <div className="flex justify-between items-start mb-3 relative z-10">
                  <h4 className="font-bold text-red-900 font-lexend">Chapter 4: Render Props vs HOCs</h4>
                  <span className="px-2 py-1 bg-red-100 text-red-600 text-[10px] font-bold rounded-lg uppercase border border-red-200">High Drop-off</span>
                </div>
                <p className="text-sm text-red-800/80 leading-relaxed relative z-10">
                  AI observed a spike in "I'm confused" queries at 12:45. Students are failing the "Prop Drilling" quiz section at a higher rate than usual.
                </p>
                <div className="mt-6 flex gap-3 relative z-10">
                  <button className="text-xs font-bold bg-white text-slate-700 border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm hover:bg-slate-50 transition-all">View Transcripts</button>
                  <button className="text-xs font-bold bg-red-600 text-white px-4 py-2.5 rounded-xl shadow-lg hover:bg-red-700 transition-all">Add AI Supplement</button>
                </div>
              </div>
              
              <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-100">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-amber-900 font-lexend">Chapter 7: Edge Middleware</h4>
                  <span className="px-2 py-1 bg-amber-100 text-amber-600 text-[10px] font-bold rounded-lg uppercase border border-amber-200">Medium Friction</span>
                </div>
                <p className="text-sm text-amber-800/80 leading-relaxed">
                  Most students require 2.4x more time to finish the interactive lab than planned. Consider breaking this into two smaller parts.
                </p>
              </div>
            </div>
          </section>

          {/* AI Tutor Interaction Trends */}
          <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-bold font-lexend">Tutor Activity Trends</h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">Interaction volume over time</p>
              </div>
              <div className="bg-indigo-50 px-3 py-1 rounded-lg">
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Live Feed</span>
              </div>
            </div>
            
            <div className="h-64 flex items-end gap-3 px-4 mb-6">
              {/* Simple CSS Bar Chart Mockup */}
              {[40, 60, 55, 90, 75, 65, 50].map((height, i) => (
                <div key={i} className="flex-1 group relative">
                  <div 
                    className={`w-full rounded-t-xl transition-all duration-500 ${i === 3 ? 'bg-indigo-600 shadow-lg shadow-indigo-200' : 'bg-indigo-100 group-hover:bg-indigo-200'}`} 
                    style={{ height: `${height}%` }}
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {height * 124} queries
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span className="text-indigo-600">Thu (Peak)</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 transition-all hover:shadow-md hover:bg-white">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avg. Sentiment</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-2xl font-bold text-emerald-600 font-lexend">94%</p>
                  <span className="text-emerald-500 font-bold text-[10px]">Positive</span>
                </div>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 transition-all hover:shadow-md hover:bg-white">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Queries Answered</p>
                <p className="text-2xl font-bold text-slate-800 mt-1 font-lexend">12,482</p>
              </div>
            </div>
          </section>
        </div>

        {/* Student Mastery Grid */}
        <section className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-12">
          <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-xl font-bold font-lexend">Individual Student Mastery</h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">Detailed Performance Breakdown</p>
            </div>
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:flex-none">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search students..." 
                  className="bg-slate-100 border-none rounded-xl pl-10 pr-4 py-2.5 text-sm w-full md:w-64 focus:ring-2 focus:ring-indigo-500 shadow-sm" 
                />
              </div>
              <button className="bg-slate-100 text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-slate-200 transition-all">
                <Download size={18} />
                Export
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
              <thead>
                <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50">
                  <th className="px-8 py-5">Student</th>
                  <th className="px-8 py-5">Progress</th>
                  <th className="px-8 py-5">AI Tutor Usage</th>
                  <th className="px-8 py-5">Mastery Score</th>
                  <th className="px-8 py-5">Risk Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { name: 'Alex Johnson', progress: 45, usage: 'High (42 queries)', score: 88, risk: 'Low', color: 'emerald', initial: 'AJ' },
                  { name: 'Sarah Williams', progress: 12, usage: 'None', score: 32, risk: 'Critical', color: 'red', initial: 'SW' },
                  { name: 'Michael Chen', progress: 78, usage: 'Moderate (15 queries)', score: 92, risk: 'Low', color: 'emerald', initial: 'MC' },
                  { name: 'Emma Davis', progress: 60, usage: 'High (38 queries)', score: 75, risk: 'Medium', color: 'amber', initial: 'ED' },
                ].map((student, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors cursor-pointer group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs border border-indigo-100`}>
                          {student.initial}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-700">{student.name}</p>
                          <p className="text-[10px] text-slate-400">Joined {i+1} {i === 0 ? 'day' : 'months'} ago</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-slate-100 h-1.5 rounded-full overflow-hidden w-24">
                          <div className="bg-indigo-600 h-full transition-all duration-1000" style={{ width: `${student.progress}%` }}></div>
                        </div>
                        <span className="text-xs font-bold text-slate-700">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-xs font-medium text-slate-500">
                      {student.usage}
                    </td>
                    <td className="px-8 py-5">
                      <span className={`text-sm font-bold text-${student.color}-500`}>{student.score}%</span>
                    </td>
                    <td className="px-8 py-5">
                      <span className={`px-2.5 py-1 bg-${student.color}-50 text-${student.color}-600 text-[10px] font-bold rounded-lg uppercase border border-${student.color}-100`}>
                        {student.risk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-8 bg-slate-50/50 flex justify-center border-t border-slate-100">
            <button className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-2">
              Show 426 more students <ChevronDown size={16} />
            </button>
          </div>
        </section>

      </main>
    </div>
  )
}

export default InstructorAnalytics
