const ApiResult = function(error, value, ...args) {
  this.value = value || false;
  this.error = error || null;
};

export default ApiResult
