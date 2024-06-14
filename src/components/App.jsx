import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#f1d4b3] overflow-hidden text-[#292218] font-Inter">
      <BackgroundHeading />

      <main className="w-[972px] h-[636px] bg-white overflow-hidden grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] shadow-[0_4px_4px_rgba(0,0,0,0.08)] rounded-lg">
        <Header />
        <ItemList />
        <Sidebar />
      </main>

      <Footer />
    </div>
  );
}

export default App;
