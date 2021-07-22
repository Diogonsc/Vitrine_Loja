import React,{useState} from "react";

const Carrinho = (props) => {

    const [count, setCount] = useState(0)

    return (
        <div>
            {/*<button className="btn" onClick={()=>setCount(count + 1)}>+</button>*/}
            <div id="icone-carrinho">
          <i className="fas fa-shopping-cart">
            {" "}
            <span> {count} </span>
          </i>
        </div>
        </div>
    )
}

export default Carrinho
