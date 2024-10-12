import './styles/App.css';
import './styles/NavigationBar.css';
import './styles/footer.css';
import Gallery from './components/Gallery';
import Navigation from './components/Navbar';
import UserProfileCard from './components/UserProfileCard';
import Footer from './components/Footer';
import FeaturedPhotographers from './components/FeaturedPhotographers';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <UserProfileCard></UserProfileCard>
      <Gallery/>
      <FeaturedPhotographers></FeaturedPhotographers>
      <Footer></Footer>
    </div>
  );
}

export default App;
