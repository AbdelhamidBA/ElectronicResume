import { Fragment,useEffect } from 'react';
import { Provider } from 'react-redux';
import '../src/css/main.css';
import '../src/css/responsive.css';
import GeneralInfo from './components/GeneralInfo'
import CVInfo from './components/CVInfo';
import store from './store';
import $ from 'jquery'



const App = () => {
  
  return(
    <Provider store={store}>

      <Fragment>
        <div className="container">
          <div className="mainsection">
            <GeneralInfo/>
            <CVInfo/>
            
          </div>
          <div className="img-previewer">
                <i className="fas fa-times fa-lg" id="closePreviewer"></i>
                <img id="imgprev" src="./images/header1.jpg" />
            </div>
        </div>
      </Fragment>
    </Provider>
);

  }
export default App;