import { ChildComponent } from "./ChildComponent"
import { Table } from "./Teble"
export function ParentCon(){
    return(
        <div>
            <h2>Parent</h2>
            <ChildComponent title='Nani' items = {['Shoe','Eloctronics','Fashions']}/>
            <Table Categories={['Mobiles','storage','GB','Price']}
           products = {[{name:'Realme',Storage:128,Tpype:6,Price:45555},{name:'Vivo',Storage:64,Tpype:8,Price:3999}
            ,{name:'Red Me',strorage:252,Tpype:4,Price:41235},{name:'Poco',storage:128,Tpype:16,Price:68888}
           ]}
            />
        </div>
    )
}