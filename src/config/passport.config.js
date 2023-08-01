// import { use, serializeUser, deserializeUser } from "passport";
import passport from "passport";

import GithubStrategy from "passport-github2";
import userModel  from "../dao/models/user.model.js";
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET} from "./config.js"

const initializePassport = () => {
  passport.use(
    "github",
    new GithubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:8000/api/v1/session/githubcallback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log("PROFILE INFO ******", profile);
          if(profile._json?.email===null){profile._json.email=profile._json?.url}
          //validar si email es null cambiar email:login o email o url o html_url 
          let user = await userModel.findOne({ email: profile._json?.email });
          console.log("🚀 ~ file: passport.config.js:21 ~ user:", user)
          
          if (!user) {
            console.log("entro a addNewUser");
            let addNewUser = {
              first_name: profile._json.name,
              last_name: "",
              email: profile._json?.email,
              age: 0,
              password: "",
            };
            let newUser = await userModel.create(addNewUser);
            done(null, newUser);
          } else {
            // ya existia el usuario
            console.log("entro a ya existia usuario");

            done(null, user);
          }
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    let user = await userModel.findById({ _id: id });
    done(null, user);
  });
};

export default initializePassport;
