export const IsPasswordAndUserMatch = (req, res, next) => {
  FindByEmail(req.body.email)
    .then((user)=>{
      if(!user[0]){
          res.status(404).send({});
      }else{
          let passwordFields = user[0].password.split('$');
          let salt = passwordFields[0];
          let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
          if (hash === passwordFields[1]) {
              req.body = {
                  userId: user[0]._id,
                  email: user[0].email,
                  permissionLevel: user[0].permissionLevel,
                  provider: 'email',
                  name: user[0].firstName + ' ' + user[0].lastName,
              };
              return next();
          } else {
              return res.status(400).send({errors: ['Invalid email or password']});
          }
      }
    });
};

export const ValidJWTNeeded = (req, res, next) => {
  if (req.headers['authorization']) {
      try {
          let authorization = req.headers['authorization'].split(' ');
          if (authorization[0] !== 'Bearer') {
              return res.status(401).send();
          } else {
              req.jwt = jwt.verify(authorization[1], secret);
              return next();
          }
      } catch (err) {
          return res.status(403).send();
      }
  } else {
      return res.status(401).send();
  }
}; 