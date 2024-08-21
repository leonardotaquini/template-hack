import { create } from 'zustand';
import { User, UserLogin, UserRegister } from '../interfaces/user.interface';
import { AuthRequests } from '../api/AuthRequests';

interface AuthStoreI {
    user: User | undefined;
    isLoading: boolean;
    token:string;
    login: ( user: UserLogin ) => Promise<void>;
    logout: () => void;
    register: ( user: UserRegister ) => Promise<void>;
    checkAuth: () => void;

}

export const useAuthStore = create<AuthStoreI>( (set) => ({
    user: undefined,
    isLoading: false,
    token: '',
    register: async( user: UserRegister ) => {
        try {
            set({ isLoading: true });
            const response = await AuthRequests.register( user );
            set({ user: response.data.user, isLoading: false });
        } catch (error) {
            set({ isLoading: false });
            console.error( error );
        }

    },
    login: async( user: UserLogin ) => {
        try {
            set({ isLoading: true });
            const response = await AuthRequests.login( user );
            set({ user: response.user, isLoading: false });
        } catch (error) {
            set({ isLoading: false });
            console.error( error );
        }
    },
    logout: () => {},
    checkAuth: () => {}

}) );







