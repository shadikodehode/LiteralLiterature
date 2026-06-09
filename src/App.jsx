import { Outlet, ScrollRestoration } from "react-router";
import Header from "./components/Header";


export default function App() {

  return (
    <div className="flex flex-row h-screen overflow-hidden text-text">
      <ScrollRestoration />
      <Header />
      <div className="flex-1 min-h-0 overflow-hidden mt-16">
        <Outlet />
      </div>
    </div>
  )
}

