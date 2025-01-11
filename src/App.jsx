import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="grid grid-cols-12 h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="col-span-9 flex flex-col">
                <Navbar />
                <Dashboard />
            </div>
        </div>
  )
}

export default App
