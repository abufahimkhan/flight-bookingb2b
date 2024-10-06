import axios from "axios";
import {
  accessGroup,
  travelPortAuthToken,
  travelportBaseUrl,
} from "../../../env";

const travelport = axios.create({
  baseURL: travelportBaseUrl,
  headers: {
    // "Accept-Encoding": "gzip, deflate",
    "Cache-Control": "no-cache",
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${travelPortAuthToken}`,
    XAUTH_TRAVELPORT_ACCESSGROUP: accessGroup,
  },
});

// An interceptor to dynamically set the Authorization token and Travelport Access Group
travelport.interceptors.request.use(
  (config: any) => {
    if (travelPortAuthToken) {
      config.headers.Authorization = `Bearer ${travelPortAuthToken}`;
    }

    if (accessGroup) {
      config.headers["XAUTH_TRAVELPORT_ACCESSGROUP"] = accessGroup;
    }

    return config;
  },
  (error: Error) => {
    return Promise.reject(error);
  },
);

export default travelport;
