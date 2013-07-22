// Generated by CoffeeScript 1.6.3
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.User = (function(_super) {
    __extends(User, _super);

    function User() {
      _ref = User.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    User.prototype.attr_accessible = ['name', 'email'];

    return User;

  })(this.Accessible);

  test("User should have 2 getters: name & email", function() {
    var user;
    user = new User();
    ok(typeof user.name === 'function', 'User has a name getter');
    return ok(typeof user.email === 'function', 'User has an email getter');
  });

  test("ability to set value to each attributes", function() {
    var user;
    user = new User();
    ok(user.email() === void 0, 'Email should be undefined when nothing was set');
    user.email('roger.brulotte@thatsmyboi.com');
    ok(user.email() === 'roger.brulotte@thatsmyboi.com', "Email shoule be roger.brulotte@thatsmyboi.com");
    ok(user.name() === void 0, 'Name should be undefined when nothing has been set');
    user.name('Roger Brulotte');
    return ok(user.name() === 'Roger Brulotte', "User's name should be Roger Brulotte, it is " + (user.name()));
  });

  test("different instances do not share the same variable", function() {
    var gary, john;
    john = new User();
    john.name("John");
    gary = new User();
    gary.name("Gary");
    ok(john.name() === "John", "John lost his name");
    ok(gary.name() === "Gary", "Gary lost his name");
    return ok(john.name() !== gary.name(), "John and Gary shouldn't have the same name");
  });

}).call(this);