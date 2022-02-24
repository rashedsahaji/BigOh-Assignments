class Chat {
    constructor() {
        this.type_;
        this.value;
        this.senderID;
    }
    setChat(type_, value, senderID) {
        this.type_ = type_;
        this.value = value;
        this.senderID = senderID;
    }
}

class showInbox extends Chat {
    getInbox() {
        console.log(`${this.type_} : ${this.value} by ${this.senderID}`);
    }
}
class TextBased extends showInbox {
}
class AudioBased extends showInbox {
}
class VideoBased extends showInbox {
}
class ImageBased extends showInbox {
}

class Status {
    constructor() {
        this.type_;
        this.value;
    }
    setStatus(type_, value) {
        this.type_ = type_;
        this.value = value;
    }
}
class Image_ extends Status {
}
class Video_ extends Status {
}
class Text_ extends Status {
}

class Contacts {
    constructor() {
        this.name;
        this.phNumber;
        //Status
        this.image = new Image_;
        this.text = new Text_;
        this.video = new Video_;
        //Chats
        this.textBased = new TextBased();
        this.videoBased = new VideoBased();
        this.audioBased = new AudioBased();
        this.imageBased = new ImageBased();
    }

    createUser(name, phNumber) {
        this.name = name;
        this.phNumber = phNumber;
    }
}

class AboutMe extends Contacts {
    aboutMe() {
        console.log(`My name is ${this.name}, Phone Number: ${this.phNumber}`);
    }
}

class SendMessege extends AboutMe {
    send(receiver, type_, value, sender) {
        if (type_ == "text") {
            receiver.textBased.setChat(type_, value, sender);
        }
        else if (type_ == "video") {
            receiver.videoBased.setChat(type_, value, sender);
        }
        else if (type_ == "image") {
            receiver.imageBased.setChat(type_, value, sender);
        }
        else if (type_ == "audio") {
            receiver.audioBased.setChat(type_, value, sender);
        }
    }
}

class Inbox extends SendMessege {
    showInbox() {
        if (this.textBased.type_ == "text" && this.textBased.type_ != null) {
            this.textBased.getInbox();
        }
        if(this.audioBased.type_ == "audio" && this.audioBased.type_ != null){
            this.audioBased.getInbox();
        }
        if(this.videoBased.type_ == "audio" && this.videoBased.type_ != null){
            this.audioBased.getInbox();
        }
        if(this.imageBased.type_ == "audio" && this.imageBased.type_ != null){
            this.imageBased.getInbox();
        }
    }
}

class CreateStatus extends Inbox {
    postStatus(statusType, status) {
        if (statusType == "image") {
            this.image.setStatus("image", status);
        }
        else if (statusType == "video") {
            this.video.setStatus("video", status);
        }
        else if (statusType == "text") {
            this.text.setStatus("text", status);
        }
        else {
            console.log(`Not supported`);
        }
    }
}

class MyStatus extends CreateStatus {
    viewStatus() {
        console.log(`\n${this.name}'s status`);
        console.log("Image status: " + this.image.value);
        console.log("Video status: " + this.video.value);
        console.log("Text status: " + this.text.value);
    }
}

class ViewStatus extends MyStatus {
    viewAllStatus(contacts) {
        for (let i = 0; i < contacts.length; i++) {
            contacts[i].viewStatus();
        }
    }
}

let contact = new MyStatus();
contact.createUser("Rashed", 123456789);
contact.aboutMe();
contact.postStatus("text", "posted text status");
contact.postStatus("video", "posted video status");
contact.postStatus("image", "posted image");
contact.viewStatus();

let contact1 = new MyStatus();
contact1.createUser("Asif", 123456789);
console.log("\n");
contact1.aboutMe();

//Default first messege
contact.send(contact1,"text", "hello", contact.name);

console.log("\nAsif's Inbox")
contact1.showInbox();
contact1.send(contact, "text", "hi", contact1.name);

console.log("\nRashed's Inbox");
contact.showInbox();