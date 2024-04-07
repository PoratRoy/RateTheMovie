export const delayPromise = (duration: number) =>
    new Promise((resolve) => setTimeout(resolve, duration));
