export const errorHandler = (statuCode, message) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    throw error;
}