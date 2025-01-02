// import AboutEmpProject from "./Components/AboutEmpProject"
import Index from "./Components/Index"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ReactCrudProject from "./Components/ReactCrudProject"
import MyntraColoneProject from "./Components/MyntraCloneProject"
import Project from "./Components/Project"
import BankingMS from "./Components/BankingMS"
const App=()=>{

    return(
      <BrowserRouter>
      <Routes>
              {/* <Route element = {<AboutEmpProject/>} path="/aboutEmpProject"/> */}
        <Route element={<Index/>} path="/" />
        <Route element={<BankingMS />} path="/BankingMS" />
        <Route element={<ReactCrudProject/>} path="/reactCrudProject" />
        <Route element={<MyntraColoneProject/>} path="/myntraCloneProject" />
        <Route element={<Project/>} path="/project" />
      </Routes>
  </BrowserRouter>
    )
}
export default App