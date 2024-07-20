import { createContext } from 'react';
import { TMessageContext } from '../../types/api';

export const MessageContext = createContext<TMessageContext | null>(null);