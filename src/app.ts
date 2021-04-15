import { RequestConfig } from 'umi';

export const request: RequestConfig = {
  prefix: process.env.NODE_ENV === 'production' ? '' : '',
  errorConfig: {
    adaptor: res => {
      console.log('in requestconfig', res);
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
