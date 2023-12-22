import { datePattern } from "./format";

export const extractYearFromDateString = (date: string | undefined): [boolean, string] => {
    if (date && datePattern.test(date)) {
        const year = date.substring(0, 4);
        return [true, year];
    }
    return [false, "Invalid date format"];
};
