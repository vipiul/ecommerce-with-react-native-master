// import api from './httpService';
// import envConfig from '../../env-config';
import axios from 'axios';
import { apiURL, envConfig, user } from './hostnameServerApi';
// const api = new axios();

const data = {
  "email":"V1@gmail.com",
  "password":"V1@gmail.com"
}

class UserServices {
  authLogin = auth_data => {
    //debug
    console.log('auth_data -----------------:', auth_data);
    return axios({
      method: 'post',
      url: `https://jsonplaceholder.typicode.com/posts`,
      data: auth_data,
       headers: { authorization: `Basic ${auth_data}` },
    });
  };

  authRegister = auth_register_data => {
    //debug
    console.log('AUTH_REGISTER_DATA', auth_register_data);

    return axios({
      method: 'post',
      url: `https://jsonplaceholder.typicode.com/posts`,
      data: auth_register_data,
    });

    // return axios({
    //   method: 'post',
    //   url: `${apiURL}/signup`,
    //   data: auth_register_data,
    // });
  }; 

  getUserProfile = (user_id, token) => {
    //debug
    console.log('TOKEEENNN', token);

    return data;

    // return axios({
    //   method: 'get',
    //   url: `${envConfig.LOCAL_API_PATH_USER}/${user_id}`,
    //   headers: { authorization: `Bearer ${token}` },
    // });
  };

  createCartId = (user_id, token) => {
    // let data = {
    //   user_id: `${user_id}`,
    // };
    // //debug
    // console.log('CARTIDDD', token);
    // console.log('CARTIDDD', user_id);
    // console.log('DATAAA:', data);
    return data;

    // return axios({
    //   method: 'post',
    //   url: `${envConfig.LOCAL_API_PATH_CART}`,
    //   headers: { authorization: `Bearer ${token}` },
    //   data: data,
    // });
  };

  getProducts = token => {
    return data;
    // return axios({
    //   method: 'get',
    //   // url: `${envConfig.LOCAL_API_PATH_PRODUCT}`,
    //   url: `https://jsonplaceholder.typicode.com/posts`,
    //   // headers: { authorization: `Bearer ${token}` },
    // });
  };

  getCartId = (cart_id, token) => {
    return data;
    // return axios({
    //   method: 'get',
    //   url: `${envConfig.LOCAL_API_PATH_CART}/${cart_id}`,
    //   headers: { authorization: `Bearer ${token}` },
    // });
  };

  getCategories = token => {
    return data;
    // return axios({
    //   method: 'get',
    //   // url: `${envConfig.LOCAL_API_PATH_CATEGORY}`,
    //   url: `https://jsonplaceholder.typicode.com/posts`,
    //   headers: { authorization: `Bearer ${token}` },
    // });
  };

  getCategoryById = (category_id, token) => {
    return data;
    // return axios({
    //   method: 'get',
    //   url: `${envConfig.LOCAL_API_PATH_CATEGORY}/${category_id}`,
    //   headers: { authorization: `Bearer ${token}` },
    // });
  };
}

export default new UserServices();
