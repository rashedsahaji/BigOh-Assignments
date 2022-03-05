class Chat {
    constructor() {
        this.type_;
        this.value;
        this.senderID;
        this.chatBox=[];
    }
    setChat(type_, value, senderID) {
        this.type_ = type_;
        this.value = value;
        this.senderID = senderID;
        this.chatBox.push(`${this.type_} : ${this.value} by ${this.senderID}`)
    }
}

class SendMessege extends Chat {
    messege(receiver, type_, value, sender) {
            if(type_ === "image" || type_ === "video" || type_ === "audio" || type_ === "text"){
                receiver.inbox.setChat(type_, value, sender);
            }
            else{
                receiver.inbox.setChat("Unsupported", "messege send", sender);
            }
    }
}

class showInbox extends Chat{
    getInbox() {
        if(this.chatBox.length > 0){
            for (const iterator of this.chatBox) {
                console.log(iterator);
            }
        }
        else{
            console.log("Inbox is empty");
        }
    }
}
class CleanInbox extends Chat{
    deleteAllChat(){
        this.chatBox = [];
        console.log("Chat history deleted");
    }
}

class Status {
    constructor() {
        this.type_;
        this.value;
        this.storesStatus=[];
    }
    setStatus(type_, value) {
        this.type_ = type_;
        this.value = value;
        this.storesStatus.push(`${this.type_} : ${this.value}`);
    }
}

class CreateStatus extends Status {
    postStatus(statusType, status) {
        if (statusType === "image" || statusType === "video" || statusType === "text") {
            this.setStatus(statusType, status);
        }
        else {
            this.setStatus(`Unsupported`, "status");
        }
    }
}

class DeleteStatus extends Status{
    deleteStatus(){
        while(this.storesStatus.length > 0){
            this.storesStatus.pop();
        }
    }
}

class MyStatus extends Status {
    viewStatus() {
        if(this.storesStatus !== null){
            for (const iterator of this.storesStatus) {
                console.log(iterator);
            }
        }
        else{
            console.log("No status posted yet")
        }
    }
}

class ViewStatus extends MyStatus {
    viewAllStatus(...contacts) {
        for (let i = 0; i < contacts.length; i++) {
            contacts[i].viewStatus();
        }
    }
}

class Contacts {
    constructor(name, phNumber) {
        this.name=name;
        this.phNumber=phNumber;
        this.send = new SendMessege();
        this.inbox = new showInbox();
        this.status = new MyStatus();
        this.deleteAllChat = new CleanInbox();
        this.deleteStatus = new DeleteStatus();
    }

    aboutMe(){
        console.log(`My name is ${this.name} phone no. is ${this.phNumber}`)
    }
}

let rashed = new Contacts("Rashed",8250798974,)

let asif = new Contacts("Ashif",7894561230)

rashed.send.messege(asif,"text","Hi I am rashed", rashed.name);
rashed.send.messege(asif,"text","How are you?", rashed.name);
rashed.status.setStatus("text", "Good morning everyone");

console.log("Ashif's Inbox - ")
asif.inbox.getInbox();
asif.deleteAllChat.deleteAllChat();
