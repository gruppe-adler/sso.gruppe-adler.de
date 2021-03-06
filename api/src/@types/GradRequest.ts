import { Request } from 'express';
import { User } from '../models';


export interface TokenPayload {
    id: number;
    username: string;
    avatar: string;
    admin: boolean;
    groups: object[];
}

export interface GradRequest extends Request {
    gradUser?: User;
}
