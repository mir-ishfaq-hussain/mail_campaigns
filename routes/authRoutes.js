const passport =require('passport')

module.exports = app=>{
    app.get('/',(req,res)=>{
        res.send({hi:"buddy"})

    })
    app.get('/auth/google',passport.authenticate('google',{
        scope:['profile','email']
    }))
    
    app.get('/auth/google/callback',passport.authenticate('google'))

    app.get('/api/logout',(req,res)=>{
        req.logout() //this function just destroys the req.user object and its provided by the passport library
        res.send(req.user)
    })

    app.get('/api/current_user',(req,res)=>{
        res.send(req.user)
    })
}
