import {  Navigate, Route, Routes } from "react-router"
import { HomePage, AboutPage, LoginPage } from "./index.ts"
import { Navbar } from "./Navbar.tsx"
import { UserProvider } from "./context/UserProvider.tsx"

export const MainApp = () => {
  return (
    <UserProvider>
        <Navbar/>
        <hr/>

        <Routes>
            <Route path = "/" element = { <HomePage/> }/>
            <Route path = "/login" element = { <LoginPage/> }/>
            <Route path = "/about" element = { <AboutPage/> }/>
            <Route path = "/*" element = { <Navigate to = {'/about'} /> }/>
            {/* <Route path = "/*" element = { <HomePage/> }/> */}
        </Routes>
    </UserProvider>
  )
}
