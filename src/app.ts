import { RequestConfig } from 'umi';

export const request: RequestConfig = {
  prefix:
    process.env.NODE_ENV === 'production'
      ? 'http://api.yzmsri.com/'
      : 'http://api.yzmsri.com/',
  errorConfig: {
    adaptor: res => {
      return {
        success: res.code == 200,
        data: res.data,
        errorCode: res.code,
        errorMessage: res.msg,
      };
    },
  },
  middlewares: [],
};
