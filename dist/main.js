// Tutorial for enums
// const statuses = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// console.log(statuses.inProgress);
var Status;
(function (Status) {
    Status[Status["NotStarted"] = 0] = "NotStarted";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
var notStartedStatus;
// notStartedStatus = Status.Done;
console.log(Status.InProgress);
// Tutorial for Generics
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var gUser = {
    name: 'Jack'
};
var result = addId(gUser);
console.log("result", result);
var User1 = /** @class */ (function () {
    function User1(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    User1.prototype.changeUnchangableName = function () {
        // this.unchangableName = "foo";
    };
    User1.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User1.maxAge = 50;
    return User1;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (givenEditor) {
        this.editor = givenEditor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User1));
var admin = new Admin("hyunjin", "aeong");
admin.setEditor("pog");
console.log(admin.getEditor());
var class_user1 = new User1("jericho", "aeong");
console.log(class_user1.getFullName());
// Tutorial for DOMs
var someElement = document.querySelector(".foo");
console.log('someElement', someElement.value);
var someElement1 = document.querySelector(".foo");
someElement1.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
// Tutorial for Any / Void / Never / Unknown
var doSomething = function () {
    console.log("doSomething");
};
var trashVar = "hello";
trashVar = 1;
var doSomething2 = function () {
    throw "never";
    console.log("doSomething");
};
var betterTrash = "test";
var s1 = trashVar;
var s2 = betterTrash;
var s3 = "1";
var s4 = s3;
var userID = "123";
var popularTags = ['dragon', 'coffee'];
var dragonsTag = null; // or "dragon"
;
var username = "alex";
var pageName = "1";
var errorMessage = null;
var unionUser = null;
;
var interface_user = {
    name: "Jericho",
    age: 20,
    getMessage: function () {
        return "Hello" + name;
    }
};
// Tutorial for creating objects
var user = {
    name: "Monster",
    age: 33
};
// Tutorial for variables and typing in TypeScript
var hello = "world";
hello = "foo";
// Tutorial for functions in TypeScript
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("jericho", "imperial"));
console.log(user.age);
console.log(interface_user.getMessage());
