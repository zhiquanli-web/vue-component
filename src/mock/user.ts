import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';

import { User } from '@/service/api';
import { ILoginResult } from '@/service/types/user';
import { IDataModel } from '@/service/types/axios';

const loginRes: IDataModel<ILoginResult> = {
  code: 0,
  data: Mock.mock({
    'token|64': /[a-zA-Z0-9]/,
    'id|12': /[0-9]/,
    username: 'admin'
  }),
  message: 'success'
};

const userInfo = {
  code: 0,
  data: {
    username: 'admin',
    avatar: ''
  }
};

export default [
  {
    url: `/api${User.LOGIN}`,
    method: 'post',
    response: ({ body }: any) => {
      console.log('params', body);
      return loginRes;
    }
  },
  {
    url: `/api${User.USER}`,
    method: 'post',
    response: () => {
      return userInfo;
    }
  }
] as MockMethod[];
