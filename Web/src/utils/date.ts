import { datePattern } from "./format";

export const extractYearFromDateString = (date: string | undefined): [boolean, string] => {
    if (date && datePattern.test(date)) {
        const year = date.substring(0, 4);
        return [true, year];
    }
    return [false, "Invalid date format"];
};

export const getYearsArray = (): string[] => {
    const currentYear = new Date().getFullYear();
    const startYear = 1800;
    const yearsArray = [];

    for (let year = startYear; year <= currentYear; year++) {
        yearsArray.push(year.toString());
    }

    return yearsArray;
};
