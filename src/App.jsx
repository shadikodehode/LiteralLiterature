import { Outlet, ScrollRestoration } from "react-router";
import Header from "./components/Header";


export default function App() {

  return (
    <div className="flex flex-row h-screen text-text">
      <ScrollRestoration />
      <Header />
      <div className="flex-1 min-w-0 overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}

