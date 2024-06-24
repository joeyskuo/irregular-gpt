import React from "react";
import ChatBot, { MessagesContext } from "react-chatbotify";

const IrregularChatBot = (props) => {

    const { controllerFunction } = props;
    const { options, messages, flow } = props.uiData;

    const setMessagesHandler = (messageFunction) => {
        controllerFunction('applyMessageFunction', messageFunction);
    }

	return (
		<>
			<MessagesContext.Provider value={{messages: messages, setMessages: setMessagesHandler}}>
				<ChatBot options={options} flow={flow}/>
			</MessagesContext.Provider>
		</>
	);
};

export default IrregularChatBot;
