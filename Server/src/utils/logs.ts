import { WarRooms } from "../model/types/warRoom";

export const logMovieCount = (count: number) => {
    console.log("Movie number: ", count);
    console.log("<------>");
};

export const logEvent = (event: string) => {
    console.log(`${event} event received`);
    console.log("----------------");
};

export const logBack = (args: Object) => {
    console.log("Sending callback with: ", args);
    console.log("<<-------------------------------->>");
};

export const logFinish = (warRooms: WarRooms) => {
    console.log("War rooms new state: ", warRooms);
    console.log("<<-------------------------------->>");
};

//TODO: in use?
// export const callbackLog = (callback: (...args: any[]) => void, ...args: any[]) => {
//     callback(...args);
//     logBack(args);
// };

export const logDbParams = (action: string, obj: string, withParam: string, param: any) =>
    console.info(`${action} ${obj} with ${withParam}: `, param);
