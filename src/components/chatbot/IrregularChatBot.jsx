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
			<Button onClick={() => controllerFunction('clearMessages')} text="Click me to clear messages!"/>
			<Button onClick={() => controllerFunction('insertMessage')} text="Click me to add a message!"/>
			<Button onClick={() => controllerFunction('replaceMessage')} text="Click me to replace a message!"/>
			<Button onClick={() => controllerFunction('createSketchMessage')} text="Click me to create a sketch!"/>
			<Button onClick={() => controllerFunction('test')} text="Click me to trigger a controller function!"/>
			<MessagesContext.Provider value={{messages: uiData.messages, setMessages: controllerSetMessages}}>
				<ChatBot options={options} flow={flow}/>
			</MessagesContext.Provider>
		</>
	);
};

// button to test above feature
const buttonStyle = {
	backgroundColor: '#ff0000',
	color: 'white',
	border: 'none',
	padding: '10px 20px',
	textAlign: 'center',
	textDecoration: 'none',
	display: 'inline-block',
	fontSize: '16px',
	borderRadius: '5px',
	cursor: 'pointer',
	transition: 'background-color 0.2s',
	margin: 10,
};
const Button = (props) => {
	return (
		<button onClick={props.onClick} style={buttonStyle}>{props.text}</button>
	);
};


export default IrregularChatBot;
