// Service d'authentification pour les connexions sociales
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  provider?: 'email' | 'facebook' | 'google';
}

// Configuration des providers OAuth
export const oauthConfig = {
  facebook: {
    appId: import.meta.env.VITE_FACEBOOK_APP_ID || 'your-facebook-app-id',
    scope: 'email,public_profile',
    redirectUri: `${window.location.origin}/auth/callback/facebook`
  },
  google: {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || 'your-google-client-id',
    scope: 'email profile',
    redirectUri: `${window.location.origin}/auth/callback/google`
  }
};

// Service Facebook
export class FacebookAuthService {
  private static instance: FacebookAuthService;
  
  static getInstance(): FacebookAuthService {
    if (!FacebookAuthService.instance) {
      FacebookAuthService.instance = new FacebookAuthService();
    }
    return FacebookAuthService.instance;
  }

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Charger le SDK Facebook
      if (window.FB) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      script.onload = () => {
        window.FB.init({
          appId: oauthConfig.facebook.appId,
          cookie: true,
          xfbml: true,
          version: 'v18.0'
        });
        resolve();
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async login(): Promise<User> {
    await this.init();
    
    return new Promise((resolve, reject) => {
      window.FB.login((response: any) => {
        if (response.authResponse) {
          this.getUserInfo(response.authResponse.accessToken)
            .then(resolve)
            .catch(reject);
        } else {
          reject(new Error('Facebook login failed'));
        }
      }, { scope: oauthConfig.facebook.scope });
    });
  }

  private async getUserInfo(accessToken: string): Promise<User> {
    return new Promise((resolve, reject) => {
      window.FB.api('/me', { fields: 'id,name,email,first_name,last_name,picture' }, (response: any) => {
        if (response && !response.error) {
          resolve({
            id: response.id,
            email: response.email,
            firstName: response.first_name,
            lastName: response.last_name,
            avatar: response.picture?.data?.url,
            provider: 'facebook'
          });
        } else {
          reject(new Error('Failed to get user info from Facebook'));
        }
      });
    });
  }
}

// Service Google
export class GoogleAuthService {
  private static instance: GoogleAuthService;
  
  static getInstance(): GoogleAuthService {
    if (!GoogleAuthService.instance) {
      GoogleAuthService.instance = new GoogleAuthService();
    }
    return GoogleAuthService.instance;
  }

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Charger le SDK Google
      if (window.gapi) {
        window.gapi.load('auth2', () => {
          window.gapi.auth2.init({
            client_id: oauthConfig.google.clientId
          }).then(() => resolve());
        });
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.onload = () => {
        window.gapi.load('auth2', () => {
          window.gapi.auth2.init({
            client_id: oauthConfig.google.clientId
          }).then(() => resolve());
        });
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async login(): Promise<User> {
    await this.init();
    
    const auth2 = window.gapi.auth2.getAuthInstance();
    const googleUser = await auth2.signIn();
    const profile = googleUser.getBasicProfile();
    const idToken = googleUser.getAuthResponse().id_token;

    return {
      id: profile.getId(),
      email: profile.getEmail(),
      firstName: profile.getGivenName(),
      lastName: profile.getFamilyName(),
      avatar: profile.getImageUrl(),
      provider: 'google'
    };
  }
}

// Types pour les déclarations globales
declare global {
  interface Window {
    FB: any;
    gapi: any;
  }
}

// Export des instances
export const facebookAuth = FacebookAuthService.getInstance();
export const googleAuth = GoogleAuthService.getInstance(); 