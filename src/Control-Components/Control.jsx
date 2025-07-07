import { NavBar } from "./Nav";
import { TableDesign } from "./Table";


export function ControlJsx(){
    return(
        <div>
            <NavBar title="Shop" items={['Contacts','Blog','Page']}/>
            <TableDesign Names={['Brand','price','avilabiliti']} categorie={[{name:'Real me', price:5999,stack:'Not availlable'},{name:'Red me', price:9999,stack:'Not availlable'},{name:'Samsung', price:10999,stack:' availlable'},{name:'Apple', price:78999,stack:' availlable'}]}/>
        </div>
    )
}