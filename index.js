const { entrypoints } = require("uxp");

const createBase = (elm,titleText) =>{
    const container = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = titleText;
    container.appendChild(title);
    //document.body.appendChild(container); documentに追加すると両方のパネルに表示される
    elm.appendChild(container);
    return {container:container,title:title};
}
/*
const addBox = base =>{
    const box = document.createElement("div");
    box.classList.add("box");
    base.appendChild(box);
    return box;
}
*/

const createTextBox = (base,id,value = "text") =>{
    const textBox = document.createElement("input");
    textBox.type = "text";
    textBox.id = id;
    textBox.value = value;
    base.appendChild(textBox);
    return textBox;
}

const createButton = (base,id,text="button") =>{
    const button = document.createElement("button");
    button.textContent = text;
    button.id = id;
    base.appendChild(button);
    return button;
}

class Connection{
    constructor(){
        this.elm = document.createElement("h2");
        this.elm.classList.add("text");
    }

    setElm(base){
        base.appendChild(this.elm);
    }

    sendMsg(msg){
        this.elm.textContent = msg;
    }
}

const connect = new Connection();

entrypoints.setup({
    panels:{
        first:{
            show(event){
                console.log("first");
                console.log(event);
                const element = createBase(event,"first");
                //const box = addBox(element.container);
                const messageBox = createTextBox(element.container,"message");
                const button = createButton(element.container,"btn");
                button.addEventListener("click",()=>{
                    connect.sendMsg(messageBox.value);
                });
            }
        },
        second:{
            show(event){
                console.log("second");
                console.log(event);
                const element = createBase(event,"second");
                connect.setElm(element.container);
            }
        }
    }
});