import axios from "axios";
import {useStore} from 'react-redux';
import * as HttpStatus from 'http-status-codes';

function successResponseInterceptor(response) {
  return Promise.resolve(response);
}

function failureResponseInterceptor(error) {

  if (error.status) {
    const {response, stack} = error;

    switch (response.status) {
      case HttpStatus.UNAUTHORIZED:
        // TODO: вернуть на форму авторизации
        break;

      case HttpStatus.FORBIDDEN:
        alert(`В доступе отказано (${HttpStatus.FORBIDDEN})`, stack);
        break;

      case HttpStatus.NOT_FOUND:
        alert(`Не найдено (${HttpStatus.NOT_FOUND})`, stack);
        break;

      case HttpStatus.INTERNAL_SERVER_ERROR:
      case HttpStatus.NOT_IMPLEMENTED:
      case HttpStatus.BAD_GATEWAY:
      case HttpStatus.SERVICE_UNAVAILABLE:
      case HttpStatus.BAD_REQUEST:
        alert(`Неизвестная ошибка сервера (${response.data})`, stack);
        break;

      case HttpStatus.GATEWAY_TIMEOUT:
        alert(`Неизвестная ошибка сервера (${response.status})`, stack);
        break;

      default:
        break;
    }
  }

      else {
      alert(`Произошла неизвестная ошибка ${error}`)
      }

  return Promise.reject(error.response);
}

/**
 * Request interceptors
 * Перехват запросов перед отправкой на сервер
 * */

function successRequestIntecepter( request ) {
  request.headers = {'X-Requested-With': 'XMLHttpRequest'};
  return Promise.resolve(request);
}

function failureRequestIntecepter(error) {
  return Promise.reject(error);
}

const config = {
  baseURL: "http://92.255.165.238:8000/",
  responseType: "json",
  headers: {
     'Content-type': 'application/json',
  }
};



export const Api = axios.create(config);

Api.interceptors.response.use(
  successResponseInterceptor,
  failureResponseInterceptor,
);
Api.interceptors.request.use(
  successRequestIntecepter,
  failureRequestIntecepter,
);



