import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import SmartClassroom from './pages/SmartClassroom'
import InstructorDashboard from './pages/InstructorDashboard'
import InstructorAnalytics from './pages/InstructorAnalytics'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/classroom" element={<SmartClassroom />} />
        <Route path="/instructor" element={<InstructorDashboard />} />
        <Route path="/instructor/analytics" element={<InstructorAnalytics />} />
      </Routes>
    </Router>
  )
}

export default App
