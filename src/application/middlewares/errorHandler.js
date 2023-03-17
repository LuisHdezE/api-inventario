const errorHandler = (res, message = "Algo sucedio", code = 403) => {
  res.status(code);
  send.status({ error: message });
};
export default errorHandler;
