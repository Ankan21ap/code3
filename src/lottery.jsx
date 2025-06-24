import { useState } from "react";

import { genTicket, sum } from "./helper_lottery";
import Ticket from "./ticket";

export default function Lottery({ n, wincondition }) {
  let [ticket, setTicket] = useState(genTicket(n)); // 3 ti random num op dhakaba
  let isWinning = wincondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  // console.log("Ticket:", ticket);
  // console.log("Ticket Sum:", sum(ticket));
  // console.log("Winning Sum:", winningsum);
  // console.log("isWinning:", isWinning);
  return (
    <div>
      <h4>LOTERY GAME</h4>
      <Ticket ticket={ticket} />

      <button onClick={buyTicket}> Buy a new ticket </button>
      <h3> {isWinning && "Congratulations, you won!"}</h3>
    </div>
  );
}
