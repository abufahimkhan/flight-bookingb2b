import { tripbeyond } from "@/utils/axios/tripbeyond";
import { action, thunk, Action, Thunk } from "easy-peasy";
import Cookies from "js-cookie";
import { toast } from "keep-react";

// Define types for the model
interface AuthState {
  data: any;
  isLoading: boolean;
  setData: Action<AuthState, any>; // Updated to use Easy Peasy's Action type
  setIsLoading: Action<AuthState, boolean>;
  register: Thunk<AuthState, RegisterPayload>; // Updated to use Easy Peasy's Thunk type
  login: Thunk<AuthState, LoginPayload>; // Updated to use Easy Peasy's Thunk type
}

interface RegisterPayload {
  credentials: any; // Define a more specific type if available for credentials
  router: any; // If you use Next.js's router, you can type this as `NextRouter`
}

interface LoginPayload {
  credentials: any; // Define a more specific type if available for credentials
  router: any; // If you use Next.js's router, you can type this as `NextRouter`
}

export const authModel: AuthState = {
  data: null,
  isLoading: false,

  // actions
  setData: action((state, payload) => {
    state.data = payload;
  }),

  setIsLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  // Register agent with enhanced error handling
  register: thunk(async (actions, payload) => {
    const { credentials, router } = payload;
    actions.setIsLoading(true);

    try {
      const response = await tripbeyond.post("/agent/register", credentials);
      if (response.data) {
        actions.setData(response.data);
        toast.success(response.data.message || "Registration successful");
        if (router) router.push("/signin/agent");
      }
    } catch (error: any) {
      actions.setData(error?.response?.data || null);
      toast.error(error?.response?.data?.message);
    } finally {
      actions.setIsLoading(false);
    }
  }),

  login: thunk(async (actions, payload) => {
    const { credentials, router } = payload;
    actions.setIsLoading(true);

    try {
      const response = await tripbeyond.post("/agent/login", credentials);
      if (response.data) {
        actions.setData(response.data);
        toast.success(response.data.message || "Login successful");
        Cookies.set("auth", response.data.token, { expires: 7 });
        if (router) router.push("/search-engine");
      }
    } catch (error: any) {
      console.error("Error: ", error);

      const errorMessage =
        error?.response?.data?.message || "Login failed. Please try again.";
      actions.setData(error?.response?.data || null);
      toast.error(errorMessage);
    } finally {
      actions.setIsLoading(false);
    }
  }),
};
