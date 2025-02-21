import Cors from "cors";

const cors = Cors({
  origin: process.env.FRONTEND_ORIGIN || "http://localhost:3000",
  credentials: true,
});

export default cors;
