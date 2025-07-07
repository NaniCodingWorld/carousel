

export function NavBar(props){
    return(
        <nav className=" p-2 d-flex justify-content-between bg-dark text-white" style={{width:'100%'}}>
            <div>
                <h4>{props.title}</h4>
            </div>
            <div className=" d-flex justify-content-between">
                 {
                    props.items.map(item => <span className="me-3" key={item}>{item}</span>)
                 }
            </div>
            <div>
            <div  className="input-group">
                 <input className="form-control" type="text" />
                 <button className="bi bi-search btn btn-warning"></button>
            </div>
            </div>
        </nav>
    )
}