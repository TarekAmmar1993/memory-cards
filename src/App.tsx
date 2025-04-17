import Header from "./components/Header";
import Cards from "./components/Cards";
import { JobPrepContextProvider } from "./context/context";
import React from "react";
import SideBar from "./components/SideBar";
import { SidebarProvider } from "./components/ui/sidebar";

const App = () => {
  return (
    <JobPrepContextProvider>
      <div className="app">
        <Header />
        <div className="grid h-full grid-cols-[auto_1fr]">
          <div className="sidebar bg-linear-to-b/hsl from-[#43A3DB] to-[#2362B0]">
            <SidebarProvider>
              <SideBar />
            </SidebarProvider>
          </div>
          <div className="main">
            <Cards />
          </div>
        </div>
      </div>
    </JobPrepContextProvider>
  );
};

export default App;
