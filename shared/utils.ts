export const isNil = (value: any) => value === null || value === undefined;
export const isPresent = (value: any) => !isNil(value);
