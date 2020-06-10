import React from "react";
import { Card } from "../card/card.component";
import "./card-list.style.css";

// class CardList extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         );
//     }
// }

// export default CardList;

// new way
export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
