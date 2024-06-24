import DataStore from "../../models/DataStore";
const dataStore = new DataStore();

const ChatBotController = (action, actionData) => {

    const currentData = {...dataStore.getData()};
    let newMessageArray = [];
    let newMessage;

    console.log({currentData});

    switch(action) {
        case 'registerUpdateStateFunction': {
            dataStore.setUpdateDataFunction(actionData);
            break;
        }
        case 'updateData': {
            dataStore.setData(actionData);
            break;
        }
        case 'test':
            console.log('controllerFunction test triggered!!!');
            break;
        case 'setInitialData':
            currentData.messages = [];
            dataStore.setData(currentData);
            break;
        case 'createSketchMessage':
            newMessageArray = currentData.messages.length ? [...currentData.messages] : [];
			newMessage = {
				content: "<div class='drawing-board'></div>",
				sender: "bot",
				type: "string",
			}
            newMessageArray.push(newMessage);
            currentData.messages = newMessageArray;
            dataStore.setData(currentData);
            break;
        case 'applyMessageFunction':
            console.log(actionData);
            // currentData.messages = actionData;
            dataStore.setData(currentData);
            return currentData.messages;
        case 'clearMessages':
            newMessageArray = currentData.messages.filter(msg => msg.sender === "system");
            currentData.messages = newMessageArray;
            dataStore.setData(currentData);
        case 'insertMessage':
            newMessage = {
				content: "Hello I am new!",
				sender: "bot",
				type: "string",
			};
            currentData.messages.push(newMessage);
            dataStore.setData(currentData);
            break;
        case 'replaceMessage':
            newMessage = {
				content: "Hello I am an in-place replacement!",
				sender: "bot",
				type: "string",
			};
            newMessageArray = currentData.messages.length ? [...currentData.messages] : [];
            newMessageArray[newMessageArray.length-1] = newMessage;
            currentData.messages = newMessageArray;
            dataStore.setData(currentData);
            break;
        default:
            break;

    }

    return;
}

export default ChatBotController;