export function New(){
    return(
        <div>
            <form>
                <div>
                    <label data-testId='title'>Name</label>
                    <input className="form-control" type="text"/>
                </div>
            </form>
        </div>
    )
}