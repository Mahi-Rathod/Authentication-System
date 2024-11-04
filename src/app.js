import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "./passportConfig.js"
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());



//Import Routers here
import userRouter from "./Routes/user.routers.js";
import emailRouter from "./Routes/otpVerification.router.js";
app.use("/api/user", userRouter);
app.use("/api/", emailRouter);
export default app;
