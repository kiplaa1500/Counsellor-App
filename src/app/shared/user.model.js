export class User {
}
export class Appointment {
    constructor(name, id, date, timeStart, timeEnd, message) {
        this.name = name;
        this.id = id;
        this.date = date;
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
        this.message = message;
    }
}
// export class Appointments{
//     date!: Date;
//     timeStart!: string;
//     timeEnd!: string;
//     message!: string;
// }
export class Users {
    constructor(username, email, firstName, lastName) {
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
export class Medication {
}
export class Groups {
    constructor(name, description, id, clients, messages) {
        this.name = name;
        this.description = description;
        this.id = id;
        this.clients = clients;
        this.messages = messages;
    }
}
export class Clients {
    constructor(client) {
        this.client = client;
    }
}
export class Messages {
    constructor(message, client) {
        this.message = message;
        this.client = client;
    }
}
//# sourceMappingURL=user.model.js.map