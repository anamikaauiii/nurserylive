import TopNavbar from "./components/TopNavbar";
import MainNavbar from "./components/MainNavbar";
import CategoryBar from "./components/CategoryBar";

function App() {
  return (
    <>
      {/* Top small navbar (Rewards, Help, etc.) */}
      <TopNavbar />

      {/* Main navbar (logo, search, login) */}
      <MainNavbar />

      {/* ROUND CATEGORY ICONS — BELOW NAVBARS */}
      <CategoryBar />
    </>
  );
}

export default App;
