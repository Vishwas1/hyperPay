import { FindById, CreateUser, List, UpdateUser, RemoveById } from '../models/user.model';

export const Insert = (req, res) => {
  let salt = crypto.randomBytes(16).toString('base64');
  let hash = crypto.createHmac('sha512',salt)
                                   .update(req.body.password)
                                   .digest("base64");
  req.body.password = salt + "$" + hash;
  req.body.permissionLevel = 1;
  CreateUser(req.body)
    .then((result) => {
        res.status(201).send({id: result._id});
    });
};

export const GetById = (req, res) => {
  FindById(req.params.userId).then((result) => {
    res.status(200).send(result);
  });
};


export const UpdateById = (req, res) => {
  if (req.body.password){
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
    req.body.password = salt + "$" + hash;
  }
  UpdateUser(req.params.userId, req.body).then((result) => {
    res.status(204).send({});
  });
};


export const List = (req, res) => {
  const limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
  let page = 0;
  if (req.query) {
    if (req.query.page) {
        req.query.page = parseInt(req.query.page);
        page = Number.isInteger(req.query.page) ? req.query.page : 0;
    }
  }
  List(limit, page).then((result) => {
    res.status(200).send(result);
  })
};

export const RemoveById = (req, res) => {
  RemoveById(req.params.userId)
    .then((result)=>{
        res.status(204).send({});
    });
};


export const Login = (req, res) => {
  try {
      let refreshId = req.body.userId + jwtSecret;
      let salt = crypto.randomBytes(16).toString('base64');
      let hash = crypto.createHmac('sha512', salt).update(refreshId).digest("base64");
      req.body.refreshKey = salt;
      let token = jwt.sign(req.body, jwtSecret);
      let b = new Buffer(hash);
      let refresh_token = b.toString('base64');
      res.status(201).send({accessToken: token, refreshToken: refresh_token});
  } catch (err) {
      res.status(500).send({errors: err});
  }
};