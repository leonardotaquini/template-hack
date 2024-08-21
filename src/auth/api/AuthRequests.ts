import httpClientAdapter from "@/adapters/httpClient.adapter";



import { UserResponseApi } from "@/auth/interfaces/user.interface";

export class AuthRequests {
    
    private static baseUrl = import.meta.env.VITE_URL_API;

    static async login(data: { email: string, password: string }): Promise<UserResponseApi | any> {
   
            const response = await httpClientAdapter.post<UserResponseApi>(`${this.baseUrl}/api/auth/login`, data, { withCredentials: true });
            return response;
   
    };

    static async register(data: { email: string, password: string }): Promise<UserResponseApi | any> {
      
            const response = await httpClientAdapter.post<UserResponseApi>(`${this.baseUrl}/api/auth/register`, data);
            return response;
  
    };

    static async checkAuth(): Promise<UserResponseApi | any> {
            const response = await httpClientAdapter.get<UserResponseApi>(`${this.baseUrl}/api/auth/check-auth-status`, {withCredentials: true});
            return response;
    };

  
};

    
