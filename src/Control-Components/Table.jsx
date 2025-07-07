import { useState } from "react"


export function TableDesign(props){

const [obj , setObj] = useState({})
    function handlesort(){
    props.categorie.name.sort( (a,b)=>{
        setObj(a)
    })
    }
    return(
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        {props.Names.map(items=> <th>
                            <div className="dropdown">
                            <button data-bs-toggle ="dropdown" className="dropdown-toggle btn btn-dark " >{items}</button>
                            <ul className="dropdown-menu ">
                                <li className=" dropdown-item bi bi-sort-alpha-down">Short Ascending</li>
                                <li className=" dropdown-item bi bi-sort-alpha-up">Short Descending</li>
                            </ul>
                        </div>
                        </th>)} 
                    </tr>
                </thead>
                <tbody>
                    {
                        props.categorie.map(item => <tr key={item}>
                            {
                                Object.keys(item).map(key => <td key={key}>{item[key]}</td>)
                            }
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}