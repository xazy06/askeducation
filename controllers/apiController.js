import ApiResult from '../modules/apiResult/index'

class ApiController {
  response(res, error, status, data) {
    return res.status(status).send(new ApiResult(error, data));
  }

}

export default ApiController;
