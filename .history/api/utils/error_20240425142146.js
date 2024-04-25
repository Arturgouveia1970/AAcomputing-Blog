export const errorHandler = (statuCode, message) => {
    const error = new Error();
    error.statusCode = statusCode;
    
    throw error;
}