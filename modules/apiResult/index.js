class ApiResult {
  constructor(error, value, ...args){
    this.value = value || false;
    this.error = error || null;
  }
}

export default ApiResult
