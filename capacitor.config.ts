import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'cocktailAPI',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
