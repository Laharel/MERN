import React, { useReducer } from 'react';

function loginReducer(state, action) {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case 'login': {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }
    case 'error': {
      return {
        ...state,
        error: 'Incorrect email!',
        isLoggedIn: false,
        isLoading: false,
        firstname: '',
        lastname: '',
        email: '',
      };
    }
    case 'logOut': {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
}
const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  isLoading: false,
  error: '',
  isLoggedIn: false,
};
export default function LoginUseReducer() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { firstname,lastname, email, isLoading, error, isLoggedIn } = state;
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'login' });
    try {
      await function login({ firstname, lastname,email }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (firstname === 'ejiro' && lastname === 'jiro'  && email === 'email') {
              resolve();
            } else {
              reject();
            }
          }, 1000);
        });
      }
      dispatch({ type: 'success' });
    } catch (error) {
      dispatch({ type: 'error' });
    }
  };
  return (
    <div className='App'>
      <div className='login-container'>
        {isLoggedIn ? (
          <>
            <h1>Welcome {lastname},{firstname}!</h1>
            <button onClick={() => dispatch({ type: 'logOut' })}>
              Log Out
            </button>
          </>
        ) : (
          <form className='form' onSubmit={onSubmit}>
            {error && <p className='error'>{error}</p>}
            <p>Please Login!</p>
            <input
              type='text'
              placeholder='firstname'
              value={firstname}
              onChange={(e) =>
                dispatch({
                  type: 'field',
                  fieldName: 'firstname',
                  payload: e.currentTarget.value,
                })
              }
            />
            <input
              type='text'
              placeholder='lastname'
              value={lastname}
              onChange={(e) =>
                dispatch({
                  type: 'field',
                  fieldName: 'lastname',
                  payload: e.currentTarget.value,
                })
              }
            />
            <input
              type='text'
              placeholder='email'
              value={email}
              onChange={(e) =>
                dispatch({
                  type: 'field',
                  fieldName: 'email',
                  payload: e.currentTarget.value,
                })
              }
            />
            <button className='submit' type='submit' disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}