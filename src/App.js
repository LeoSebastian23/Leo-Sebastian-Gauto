import "./styles/App.css";
import "./styles/navbar.css";
import "./styles/userProfileCard.css";
import "./styles/SelectorGrid.css";
import "./styles/gallery.css";
import "./styles/footer.css";
import Gallery from "./components/Gallery";
import Navigation from "./components/Navbar";
import UserProfileCard from "./components/UserProfileCard";
import Footer from "./components/Footer";
import FeaturedPhotographers from "./components/FeaturedPhotographers";
import AlbumTab from "./components/TabHeader";

function App() {
  return (
    <div className="App bg-light">
      <Navigation></Navigation>
      <AlbumTab date={"15/06/2024"}></AlbumTab>
      <UserProfileCard></UserProfileCard>
      <Gallery />
      <FeaturedPhotographers></FeaturedPhotographers>
      <Footer></Footer>
    </div>
  );
}

export default App;
