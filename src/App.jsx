import "./App.css";
import { sum } from "./helper_lottery";
// import ProductTab from "./producttab";
// import Likebutton from "./likebutton";
// import TodoList from "./todo";
import Lottery from "./lottery";
// import TicketNum from "./TicketNum";

function App() {
  let wincondition = (ticket) => {
    // return sum(ticket) === 15;
    return ticket.every((num) => num === ticket[0]);
  };

  return (
    <div>
      {/* <h2> Blockbuster Deals I Shop Now</h2> */}
      {/* <ProductTab /> */}
      {/* <Likebutton /> */}
      {/* {<TodoList />} */}
      <p>Ticket</p>
      <Lottery n={3} wincondition={wincondition} />
    </div>
  );
}

export default App;
