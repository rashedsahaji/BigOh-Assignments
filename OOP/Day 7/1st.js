class Status{
    constructor(){
        this.type;
        this.value;
    }
    setType(type){
        this.type = type;
    }
    setValue(value){
        this.value = value;
    }
}

class Image_ extends Status{

}
class Text_ extends Status{

}
class Video extends Status{

}

class Chat{
    constructor(){
        this.type;
        this.value;
        this.name;
    }
    setType(type){
        this.type = type;
    }
    setValue(value, name){
        this.value = value;
        this.name = name;
    }
    isNull(){
        return this.type;
    }

    getValue(){
        console.log(`${this.type} : ${this.value} by ${this.name}`);
    }
}

class TextBased extends Chat{

}
class AudioBased extends Chat{

}
class VideoBased extends Chat{

}
class ImageBased extends Chat{

}

class Conatact{
    constructor(){
        this.name;
        this.number;
        //Status
        this.image = new Image_();
        this.text = new Text_();
        this.video = new Video();
        //Chats
        this.textBased = new TextBased();
        this.audioBased = new AudioBased();
        this.imageBased = new ImageBased();
        this.videoBased = new VideoBased();
    }

    createUser(name,number){
        this.name = name;
        this.number = number;
    }

    //About Me
    aboutMe(){
        console.log(`My name is ${this.name}, Phone Number: ${this.number}`);
    }

    postStatus(postType, postContaint){
        if(postType === "image"){
            this.image.setType("image");
            this.image.setValue(postContaint);
        }
        else if(postType === "video"){
            this.video.setType("video");
            this.video.setValue(postContaint);
        }
        else if(postType === "text"){
            this.text.setType("text");
            this.text.setValue(postContaint);
        }
        else{
            console.log("Not supported");
        }
    }

    viewStatus(){
        console.log(`\n${this.name}'s status`);
        console.log("Image status: " + this.image.value);
        console.log("Video status: "+ this.video.value);
        console.log("Text status: "+ this.text.value);
    }

    viewAllStatus(contacts){
        for(let i=0; i<contacts.length;i++){
            contacts[i].viewStatus();
        }
    }

    sendText(recevier,value, sender){
        recevier.textBased.setType("text");
        recevier.textBased.setValue(value, sender);
    }
    sendAudio(recevier, value, sender){
        recevier.audioBased.setType("audio");
        recevier.audioBased.setValue(value, sender);
    }
    sendVideo(recevier, value, sender){
        recevier.videoBased.setType("video");
        recevier.videoBased.setValue(value, sender);
    }
    sendImage(recevier, value, sender){
        recevier.imageBased.setType("image");
        recevier.imageBased.setValue(value, sender);
    }

    inbox(){
        if(this.textBased.isNull() != null && this.textBased.type == "text"){
            this.textBased.getValue();
        };
        if(this.audioBased.isNull() != null && this.audioBased.type == "audio"){
            this.audioBased.getValue();
        };
        if(this.imageBased.isNull() != null && this.imageBased.type == "image"){
            this.imageBased.getValue();
        };
        if(this.videoBased.isNull() != null && this.videoBased.type == "video"){
            this.videoBased.getValue();
        };
    }
}

let rashed = new Conatact();
rashed.createUser("Rashed", 8250798974);

rashed.aboutMe();
rashed.postStatus("image","image");
rashed.postStatus("video","video");
rashed.postStatus("text","text");
rashed.viewStatus();

console.log("\n");

let himanshu = new Conatact();
himanshu.createUser("Himanshu",1234567890);
himanshu.aboutMe();
himanshu.postStatus("image","funny.png");
himanshu.postStatus("video","funny.mp4");
himanshu.postStatus("text","text");
himanshu.sendText(rashed,"Hi Rashed",himanshu.name);


let micky = new Conatact();
micky.createUser("Micky",0987654321);
micky.aboutMe();
micky.postStatus("image","funny.png");
micky.postStatus("video","funny.mp4");
micky.postStatus("text","text");

let contacts = [himanshu,micky]

console.log("\nStatus posts available in Rashed's contacts");
rashed.viewAllStatus(contacts);

console.log("\nRashed's Inbox:");
rashed.inbox();
rashed.sendText(himanshu,"hello", rashed.name);

console.log("\nHimanshu's Inbox");
himanshu.inbox();