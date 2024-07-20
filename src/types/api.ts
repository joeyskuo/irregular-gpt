export type TMessage = {
    role: string,
    content: string,
    messageId: string
}

export type TMessageContext {
    messages: TMessage[]
}