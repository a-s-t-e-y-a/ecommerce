import { Response } from "express";

interface MyInterface {
    message: string;
    status: number;
    data: Record<string, any>;
}

export function responseSuccess(res: Response, success: MyInterface): Response {
    return res.status(success.status).json({
        message: success.message,
        data: success.data,
    });
}
