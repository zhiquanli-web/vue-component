import { globalConfig } from '@/config';
const prefix = `${globalConfig.projectName}_${import.meta.env.MODE}`;

export const tokenKey = prefix;
