import { Router } from "express";
import passport from "passport";
import userDTO from "../services/sessions.service.js";

const router = Router();

router.post("/register", passport.authenticate('register', {failureRedirect:'/failregister'}), async (req, res) => {
    res.send({status: "success", message: "User registered"})
})

router.get("/failregister", (req, res) => {
    console.log("Failed to register")
    res.send({error:"Failed to register"})
})

router.post("/login", passport.authenticate('login',{failureRedirect:'/faillogin'}), async (req, res) => {
    if (!req.user) return res.status(400).send({status:"error", message:"Invalid credentials"})
    req.session.user = {
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        email: req.user.email,
        age: req.user.age,
        role: req.user.role,
        idCart: req.user.idCart
    };
    return res.send({ status: "success", payload:req.user });
});

router.get("/faillogin", (req, res) => {
    res.send({error:"Failed to login"})
})

router.get("/logout", async (req, res) => {
    req.session.destroy();
    res.redirect('/')
})

/* router.post("/logout", async (req, res) => {
    req.session.destroy();
    res.redirect('/')
}) */

/* router.post('/logout', function(req, res, next){
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
}); */

router.get("/github", passport.authenticate('github', {scope: ['user:email']}), async (req, res) => {})

router.get("/githubcallback", passport.authenticate('github', {failureRedirect:'/failregister'}), async (req, res) => {
    req.session.user = req.user
    res.redirect('/')
})

router.get("/current", (req, res) => {
    if (req.isAuthenticated()){
        const user = req.session.user
        const finalUser = new userDTO(user)
        res.send(finalUser)

    }
    else{
        res.send({error: "user don't authenticated"})
    }
})

export default router