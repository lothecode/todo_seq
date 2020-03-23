const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

//載入User model
const db = require('../models')
const User = db.User

module.exports = passport => {
  passport.use(
    // 加入 passReqToCallback: true 在後面的 callback 中可以使用 req 參數
    new LocalStrategy({ usernameField: 'email', passReqToCallback: true }, (req, email, password, done) => {
      User.findOne({ where: { email: email } })
        .then(user => {
          if (!user) {
            return done(null, false, req.flash('warning_msg', '輸入的email未註冊'))
          }
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err
            if (isMatch) {
              return done(null, user)
            } else {
              return done(null, false, req.flash('warning_msg', 'Email or Password 錯誤!'))
            }
          })

        })
    })
  )
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  passport.deserializeUser((id, done) => {
    User.findByPk(id).then(user => {
      done(null, user)
    })
  })
}