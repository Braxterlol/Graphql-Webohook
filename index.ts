import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { db } from "./src/config/db";
import { resolvers  } from "./src/resolvers/resolvers";
import { typeDefs } from "./src/typeDefs/typeDefs";
//import auth from "./src/middleware/auth";


db.connect()
.then(() => {
    console.log('Conexión a la BD exitosa');
})
.catch((error) =>{
    throw new Error(error); 
});  

console.log(typeDefs);
console.log('*******************************');
console.log(resolvers);
 
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const PORT = parseInt(process.env.API_PORT || "4000");

startStandaloneServer(server, {
    listen: { port: PORT},
    //context: auth
})
.then(({url}) => console.log('Anda jalando aqui: ' + url))
.catch((error) => {
    throw new Error(error);
})

console.log("OK!");