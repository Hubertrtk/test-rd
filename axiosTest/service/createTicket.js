import axios from "axios";

const createTicket = async (ticketData, sessionId) => {
  const res = await axios.post(
    "https://restreamdesk-playlive-dhescvhdd3etbjdz.northeurope-01.azurewebsites.net/restreamdesk/createTicket",
    {
      data: ticketData,
      _sessid: sessionId,
    }
  );
  return res;
};

export default createTicket;
