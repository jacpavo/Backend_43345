import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import sessionRouter from "./routes/session.router.js";
import viewsRouter from "./routes/views.routes.js";
import { intializePassport } from "./config/passport.config.js";
import passport from "passport";

const app = express();
const connection = mongoose.connect(
  "mongodb+srv://jacpavo:Chinchulin88@@cluster0.ijk3ftf.mongodb.net/?retryWrites=true&w=majority",
);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'))

app.use(cookieParse())
intializePassportJWT()
initializePassportLocal()
app.use(passport.initialize())

app.use(
  session({
    store: new MongoStore({
      mongoUrl:
        "",
    }),
    secret: "mongoSecret",
    resave: true,
    saveUninitialized: false,
  })
);

app.use(passport.initialize())

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use('/', viewsRouter)
app.use('/api/session', sessionRouter)

app.listen(8080, () => {
  console.log("servidor levantado");
});