import {Header, Footer} from './components/index' 
import { AllRoutes } from './routes/AllRoutes';
import './App.css';



export default function App(){
  return(
    <>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </>
  );
}
