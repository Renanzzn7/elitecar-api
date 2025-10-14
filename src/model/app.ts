import { server } from "./server.js";

const port: number = 3333;


server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});