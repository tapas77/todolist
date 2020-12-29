import react from 'react';
import "./ListItems.css";
import FlipMove from 'react-flip-move';


function ListItems(props) {
    const items = props.items
    const listItems  = items.map(item => {
        return(
            <div className= "list" key={item.key}>
                <p>
                    <input type="text" id={item.key} value={item.text} onChange={(e)=>{props.setUpdate(e.target.value,item.key)}}/>
                    <span>
                        <div  className="myButton" onClick={() => {props.deleteItem(item.key)}} >X</div>
                    </span>
                </p>
            </div>
            
        )
    })
    return(
        <>
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
        
        </>
    )
}

export default ListItems;