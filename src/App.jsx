import { Outlet, ScrollRestoration } from "react-router";
import Header from "./components/Header";


export default function App() {

  return (
    <>
      <div className="bg-backg min-h-screen min-w-screen text-text">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex">
            <Header />
          </div>
          <ScrollRestoration />
          <div className="flex flex-row">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

