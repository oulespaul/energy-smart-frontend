import apiAxios from "shared/apis/apiAxios";
import apiLogin from "shared/apis/apiLogin";
import handlePromise from "shared/handlePromise";

class AuthService {
  signIn = async (credentials) => {
    const [{ data }, error] = await handlePromise(apiLogin(credentials));

    if (error) throw new Error(error);

    return this.setSession(data.access_token);
  };

  signOut = () => {
    return this.setSession(null);
  };

  setSession = (accessToken) => {
    if (accessToken) {
      const base64 = accessToken.split(".")[1];
      const payload = JSON.parse(window.atob(base64));

      localStorage.setItem("username", payload.username);
      localStorage.setItem("access_token", accessToken);

      apiAxios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("access_token");

      delete apiAxios.defaults.headers.common["Authorization"];
    }
  };
}

const AuthInstance = new AuthService();

export default AuthInstance;
