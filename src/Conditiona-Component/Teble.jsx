

export function Table(props){
    return(
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        {
                               props.Categories.map(category => <th key={category}>{category}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.products.map(product => <tr key={product}>
                            {
                                Object.keys(product).map(item => <td key={item}>{product[item]}</td>)
                            }
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    )
}