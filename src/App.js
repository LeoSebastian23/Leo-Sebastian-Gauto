import './styles/App.css';
import './styles/NavigationBar.css';
import Gallery from './components/Gallery';
import Navigation from './components/Navbar';
import UserProfileCard from './components/UserProfileCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <UserProfileCard></UserProfileCard>
      <Gallery/>
      <Footer></Footer>
    </div>
  );
}

export default App;
