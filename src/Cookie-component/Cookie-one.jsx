import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { CookieTwo } from "./Cookie-2";
import { Cookie3 } from "./Cookie-3";

export function CookieOne(){
    return(
        <div>
            <div className="d-flex justify-content-between">
                <div>
                    Shop
                </div>
                <div className="d-flex justify-content-around">
                 <span><Link to='cooki2'>Cookie2</Link></span>
                 <span> Cookie3</span>
                </div>
            </div>
            <BrowserRouter>
            <Routes>
            <Route path="cooki2" element={<CookieTwo/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    ) 
 }