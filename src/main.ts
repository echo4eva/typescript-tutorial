// Tutorial for enums
// const statuses = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2
// }

// console.log(statuses.inProgress);

enum Status {
    NotStarted,
    InProgress,
    Done,
}
let notStartedStatus: Status.NotStarted;
// notStartedStatus = Status.Done;

console.log(Status.InProgress);


// Tutorial for Generics
const addId = <T>(obj: T) => {
    const id = Math.random().toString(16)
    return{
        ...obj,
        id,
    };
};

interface aInterface{
    name: string;
}

const gUser: aInterface = {
    name: 'Jack'
};

const result = addId<aInterface>(gUser);
console.log("result", result);

// Tutorial for Classes
interface UI {
    getFullName(): string;
}


class User1 implements UI {
    private firstName: string;
    private lastName: string;
    readonly unchangableName: string;
    static readonly maxAge = 50;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }

    changeUnchangableName(): void {
        // this.unchangableName = "foo";
    }
    
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

class Admin extends User1{
    private editor: string;

    setEditor(givenEditor: string): void {
        this.editor = givenEditor;
    }

    getEditor(): string {
        return this.editor;
    }
}

const admin = new Admin("hyunjin", "aeong");
admin.setEditor("pog");
console.log(admin.getEditor());

const class_user1 = new User1("jericho", "aeong");
console.log(class_user1.getFullName());

// Tutorial for DOMs
const someElement = document.querySelector(".foo") as HTMLInputElement;

console.log('someElement', someElement.value)

const someElement1 = document.querySelector(".foo");

someElement1.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement
    console.log('event', target.value)
})

// Tutorial for Any / Void / Never / Unknown
const doSomething = (): void => {
    console.log("doSomething");
}

let trashVar: any = "hello";
trashVar = 1;

const doSomething2 = (): never => {
    throw "never";
    console.log("doSomething");
}

let betterTrash: unknown = "test";
let s1: string = trashVar;
let s2: string = betterTrash as string;
let s3: string = "1";
let s4: number = s3 as unknown as number;


// Tutorial for type aliases
type ID = string
let userID: ID = "123";

type PopularTag = string;
const popularTags: PopularTag[] = ['dragon', 'coffee']

type MaybePopularTag = PopularTag | null
const dragonsTag: MaybePopularTag = null // or "dragon"

// Tutorial for Unions
interface UnionInterface {
    name: string,
    surname: string,
};

let username: string = "alex";
let pageName: string | number = "1";
let errorMessage: string | null = null;
let unionUser: UserInterface | null = null;

// Tutorial for interfaces
interface UserInterface {
    name: string;
    age?: number;

    getMessage(): string
};

const interface_user: UserInterface = {
    name: "Jericho",
    age: 20,

    getMessage() {
        return "Hello" + name;
    },
};

// Tutorial for creating objects
const user: {name: string, age: number} = {
    name: "Monster",
    age: 33,
};

// Tutorial for variables and typing in TypeScript
let hello: string = "world";
hello = "foo";

// Tutorial for functions in TypeScript
const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
};

console.log(getFullName("jericho", "imperial"));

console.log(user.age)

console.log(interface_user.getMessage());