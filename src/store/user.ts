import { defineStore } from 'pinia';
import { tokenKey } from '@/common';
import { login } from '@/service/api/user';
import { IAccount } from '@/service/types/user';
import localCache from '@/utils/localCache';
import router from '@/router';

const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: '',
      userInfo: { name: 'admin', avatar: '' }
    };
  },
  actions: {
    async loginAction(params: IAccount) {
      try {
        const {
          code,
          data: { token }
        } = await login(params);
        if (code === 0) {
          localCache.setCatch(tokenKey, token);
          this.token = token;
          router.push('/');
        }
      } catch (error) {
        return error;
      }
    }
  }
});

export default useUserStore;
