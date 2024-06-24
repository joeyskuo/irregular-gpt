import DataStore from "../../models/DataStore";

const dataStore = new DataStore();

const ChatBotController = (action, actionData) => {

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
        default:
            break;

    }

    return;
}

export default ChatBotController;