
export function ChildComponent(props){
    return(
        <div className='mt-3 p-2 d-flex justify-content-around bg-dark text-white' >
            <h1>child</h1>
            <div>
                {props.title}
            </div>
            <div>
                {
                    props.items.map(item => <spna className='mx-2 fs-bold' key={item}>{item}</spna>)
                }
            </div>
            <div>
                <div className="input-group">
                <input type="text" className="form-control"/>
                <button className="bi bi-search btn btn-warning"></button>

            </div>
            </div>
        </div>
    )

}