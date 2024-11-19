const setError = (message) => {
    const error = new Error;
    error.message = message;
    return error
}

module.exports = { setError };