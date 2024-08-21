import { create } from 'zustand';
import { User } from '../interfaces/user.interface';

interface AuthStoreI {
    user: User | undefined;
    isLoading: boolean;
    login: () => void;
    logout: () => void;
    register: () => void;
    checkAuth: () => void;

}

export const useAuthStore = create<AuthStoreI>( (set) => ({
    user: undefined,
    isLoading: false,
    register: () => set( (state) => ({ ...state, isLoading: true }) ),
    login: () => {},
    logout: () => {},
    checkAuth: () => {}

}) );







