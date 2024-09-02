import Blog from "./components/blogs/Blog"
import Navbar from "./components/navbar/navbar"
import Sidebar from "./components/sidebar/Sidebar"

function App() {


  return (
    <>
    <Navbar/>
    <div className="flex">
    <Blog/>
    <Sidebar/>
    </div>
    
    </>
  )
}

export default App
