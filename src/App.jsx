import { Outlet, ScrollRestoration } from "react-router";
import Header from "./components/Header";


export default function App() {

  return (
    <div className="flex flex-col h-screen overflow-hidden text-text">
      <ScrollRestoration />
      <Header />
      <div className="flex-1 min-h-0 overflow-hidden pt-30 mt-10 bg-amber-50">
        <Outlet />
      </div>
    </div>
  )
}

