import passport from "passport";
import local from "passport-local";
import userModel from "../models/Users.model.js";
import { createHash } from "../utils.js";
import { validatePassword } from "../utils.js";

const LocalStrategy = local.Strategy;

export const initializePassportLocal = () => {
  passport.use(
    "register",
    new LocalStrategy(
      { passReqToCallback: true, usernameField: "email" },
      async (req, username, password, done) => {
        const { first_name, last_name, age, email } = req.body;
        try {
          if (user) {
            console.log("user already exists");
            return done(null, false);
          }
          console.log(user)
          const newUser = {
            first_name,
            last_name,
            age,
            email,
            password: createHash(password),
          };
          const result = await userModel.create(newUser);
          return done(null, result);
        } catch (error) {
          return done("error al registrar usuario", error);
        }
      }
    )
  );

  passport.use(
    "login",
    new LocalStrategy(
      { usernameField: "email" },
      async (username, password, done) => {
        try {
          const user = await userModel.findOne({ email: username });
          if (!user) {
            console.log("user does not exist");
            return done(null, false);
          }

          console.log(user)
          if (!validatePassword(password, user)) {
            return done("invalid password", null);
          }
          return done(null, user);
        } catch (e) {}
      }
    )
  );
};