module.exports = class UserService {
  constructor(model) {
    Object.assign(this, { model });
  }

  findAll() {
    return this.model.find().then(data => data);
  }

  findById(userId) {
    return this.model.findOne({ _id: userId }).then(user => {
      return user;
    })
    .catch(err => {
      throw "User not found";
    })
  }

  save(user) {
    const newUser = this.model(user);
    return newUser.save((err, user) => {
      if (err) {
        throw "User wasn't added.";
      }
      return user.speak();
    });
  }
}
