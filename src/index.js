import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { New } from './Component/new';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import bootstrap from 'bootstrap'
import { NormalForm } from './Forms/normal-form';
import { FormikForm } from './Forms/formik-form';
import { AjaxApi } from './Api/Ajax-Api';
import { Carousel } from './Timer/Carousel';
import { MouseOn } from './Event/MouseOnmove';
import { KeyBord } from './Event/Key-bord';
import { Fakestore } from './fake-store/fake-store';
import { CookiesProvider } from 'react-cookie';
import { PromiseOne } from './Api/Promise';
import { Async1 } from './Api/async';
import { Book } from './Api/Book';
// import { store } from './Project/store';

// import { Count } from './redux/counterNum';
// import { AddComments } from './redux/Add-Comments';
// import { DataApi } from './redux/data-api';
//import { LazyComponent } from './LazyLoading/Lazy-component';
import { Style } from './Style-Component/style';
import { Parent } from './Context-Component/Parent';
import { Hdo } from './Class-Component/Component';
import { ControlJsx } from './Control-Components/Control';
import { LazyComponent } from './LazyLoading/Lazy-Component';
import ErrorBoundary, { ErrorComponent } from './Error-Component/Error-parent';
import { ContextParent } from './Context-api/Context-store';
import { CookieOne } from './Cookie-component/Cookie-one';
import { CarouselTwo } from './Carousel/Carousel-Component';

import { ParentCon } from './Conditiona-Component/parent';
import { MultipleFetching } from './Api/MultipleApi/ApiData';
import { Pop } from './Pop-Component/Pop-up';
import { ClassBaseComponent } from './Class-Component/Clss-one';
import { Homepage } from './Portfolio/home';
import { ApiAll } from './Api/api-all';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Addlikes } from './redux/Add-likes';
import { Comments } from './redux/Comments';
import { ProdctFetch } from './redux/prodcut-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <CookiesProvider> 

 <Provider store={store}>
  <ProdctFetch />
 </Provider>

   </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
