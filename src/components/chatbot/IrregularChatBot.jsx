import React from "react";
import ChatBot, { MessagesContext } from "react-chatbotify";

const IrregularChatBot = (props) => {

    const { controllerFunction, uiData } = props;

	// example options
	const options = {
        isOpen: true,
		theme: {
			embedded: true
		},  
		chatHistory: {
			storageKey: "example_custom_messages"
		},
        botBubble: {
            dangerouslySetInnerHtml: true
        },
		// remember to enable custom messages under the advance section
		advance: {
			useCustomMessages: true
		}
	}

	// example flow
	const flow = {
		start: {
			message: "Hello there! I am a demo for custom messages!",
			chatDisabled: true
		}
	}

    const controllerSetMessages = (messageFunction) => {
        controllerFunction('applyMessageFunction', messageFunction);
    }

    console.log(uiData.messages);

	return (
		<>
			<MessagesContext.Provider value={{messages: uiData.messages, setMessages: controllerSetMessages}}>
				<ChatBot options={options} flow={flow}/>
			</MessagesContext.Provider>
		</>
	);
};

export default IrregularChatBot;
