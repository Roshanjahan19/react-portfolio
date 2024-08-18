import styles from './App.module.css';
import {About} from './component/About/About';
import {Experience} from './component/Experience/Experience';
import {Navbar} from './component/Navbar/Navbar';
import { Contact } from './component/Contact/Contact';


function App() {
  //import the components
  return (
  <div className={styles.App}>
  <Navbar/>
  <About/>
  <Experience/>
  <Contact/>
  </div>
  );
}
export default App;
