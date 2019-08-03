const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rest-tutorial');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  permissionLevel: Number
});

const User = mongoose.model('Users', userSchema);

export const CreateUser = (userData) => {
  const user = new User(userData);
  return user.save();
};

export const FindById = (id) => {
  return User.findById(id).then((result) => {
    result = result.toJSON();
    delete result._id;
    delete result.__v;
    return result;
  });
};

export const UpdateUser = (id, userData) => {
  return new Promise((resolve, reject) => {
    User.findById(id, function (err, user) {
        if (err) reject(err);
        for (let i in userData) {
            user[i] = userData[i];
        }
        user.save(function (err, updatedUser) {
            if (err) return reject(err);
            resolve(updatedUser);
        });
    });
  })
};

export const List = (perPage, page) => {
  return new Promise((resolve, reject) => {
    User.find()
        .limit(perPage)
        .skip(perPage * page)
        .exec(function (err, users) {
            if (err) {
                reject(err);
            } else {
                resolve(users);
            }
        })
  });
};

export const RemoveById = (userId) => {
  return new Promise((resolve, reject) => {
    User.remove({_id: userId}, (err) => {
        if (err) {
            reject(err);
        } else {
            resolve(err);
        }
    });
  });
};
