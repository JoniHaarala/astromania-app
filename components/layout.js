import { Header } from "./Header"
import Navbar from "./Navbar"

export const Layout = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-2xl">
        <Header/>
        <Navbar />
        <>
          {children}
        </>
      </div>
    </div>
  )
}
