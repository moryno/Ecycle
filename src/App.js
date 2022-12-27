import Assistance from "./components/Assistance";
import CategoryList from "./components/CategoryList";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategoryList />
      <Assistance />
      <Footer />
    </div>
  );
}
