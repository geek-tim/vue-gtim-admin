import { http } from '/@/utils/http'
import {
  LoginParamsModel,
  LoginResultModel,
  GetUserInfoModel
} from './model/userModel'
import { ErrorMessageMode } from '/#/axios'

enum Api {
  Login = '/login',
  Logout = '/logout',
  GetUserInfo = '/getUserInfo',
  GetPermCode = '/getPermCode'
}

export function loginApi(
  params: LoginParamsModel,
  mode: ErrorMessageMode = 'modal'
) {
  return http.post<LoginResultModel>(
    {
      url: Api.Login,
      params
    },
    {
      errorMessageMode: mode
    }
  )
}

export function doLogout() {
  return http.get({ url: Api.Logout })
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return http.get<GetUserInfoModel>({ url: Api.GetUserInfo })
}
