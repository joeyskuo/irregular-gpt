import React, { useState, useEffect } from "react";
import ChatBot, { MessagesContext } from "react-chatbotify";

const IrregularChatBot = () => {
	// setup your own messages state 
	const [messages, setMessages] = React.useState([]);

	// example clear messages (while keeping system message)
	// note: system message refers to the load history button
	const clearMessages = () => {
		setMessages(prev => prev.filter(msg => msg.sender === "system"));
	}

	// example insert messages
	const insertMessage = () => {
		setMessages(prev => {
			const newMessage = {
				content: "Hello I am new!",
				sender: "bot",
				type: "string",
			}
			return [...prev, newMessage]
		})
	}

    // example replace messages
	const replaceMessage = () => {
		setMessages(prev => {

			const newMessage = {
				content: "Hello I am an in-place replacement!",
				sender: "bot",
				type: "string",
			};

            prev[prev.length-1] = newMessage;
            
			return [...prev]
		})
	}

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

	return (
		<>
			<Button onClick={clearMessages} text="Click me to clear messages!"/>
			<Button onClick={insertMessage} text="Click me to add a message!"/>
			<Button onClick={replaceMessage} text="Click me to replace a message!"/>
			{/* Import MessagesContext and wrap as Provider around the chatbot */}
			<MessagesContext.Provider value={{messages: messages, setMessages: setMessages}}>
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
