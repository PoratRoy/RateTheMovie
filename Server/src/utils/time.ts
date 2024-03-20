export const extractYearFromDate = (date: string): string => {
    return date.substring(0, 4);
};

export const delayPromise = (duration: number) =>
    new Promise((resolve) => setTimeout(resolve, duration));

export const currentYear = new Date().getFullYear();