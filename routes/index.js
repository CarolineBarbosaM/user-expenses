import bodyParser from "body-parser";
import users from "./users.route.js";
//import users from "./"

app.use(
    bodyParser.json(),
    users,
)

export default app