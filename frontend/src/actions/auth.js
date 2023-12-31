import axios from "axios";
import { setAlert } from "./alert";
import { SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";
export const login = (email, password) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post('http://localhost:8001/api/token/', body, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })

      dispatch(setAlert('Authenticated successfully', 'success'));
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch(setAlert('Error of Authetication', 'error'));

    }
  }
}

export const signup = ({ name, email, password, password2 }) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify({ name, email, password, password2 })

    try {
      const res = await axios.post('http://localhost:8001/api/accounts/signup', body, config);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      })

      dispatch(login(email, password));
    } catch (error) {
      dispatch({
        type: SIGNUP_FAIL,
      });
      dispatch(setAlert('Error of Authetication', 'error'));

    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    dispatch(setAlert('logout successful', 'success'));
    dispatch({ type: LOGOUT });

    try {
      const res = await axios.post('http://localhost:8001/api/accounts/signup', body, config);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      })

      dispatch(login(email, password));
    } catch (error) {
      dispatch({
        type: SIGNUP_FAIL,
      });
      dispatch(setAlert('Error of Authetication', 'error'));

    }
  }
}
