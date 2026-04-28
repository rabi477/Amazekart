export const ACTIONS = {
  NAME_CHANGE: "NAME_CHANGE",
  USERNAME_CHANGE: "USERNAME_CHANGE",
  EMAIL_CHANGE: "EMAIL_CHANGE",
  PASSWORD_CHANGE: "PASSWORD_CHANGE",
};

export const initialState = {
  name: { value: "", isValid: false },
  username: { value: "", isValid: false },
  email: { value: "", isValid: false },
  password: {
    value: "",
    validations: {
      hasLowerCase: false,
      hasUpperCase: false,
      hasNumber: false,
      hasSpecialChar: false,
      minLength: false,
    },
  },
};

const NAME_PATTERN = /^[a-zA-Z\s]{3,}$/;
const USERNAME_PATTERN = /^[a-zA-Z0-9_]{3,}$/;
const EMAIL_PATTERN =
  /^(?<username>[a-z]\w+\.?\w+)@(?<domain>[a-z]{2,15})\.(?<td>[a-z]{2,3})$/;

export const signupReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.NAME_CHANGE:
      return {
        ...state,
        name: {
          value: payload,
          isValid: NAME_PATTERN.test(payload),
        },
      };
    case ACTIONS.USERNAME_CHANGE:
      return {
        ...state,
        username: {
          value: payload,
          isValid: USERNAME_PATTERN.test(payload),
        },
      };
    case ACTIONS.EMAIL_CHANGE:
      return {
        ...state,
        email: {
          value: payload,
          isValid: EMAIL_PATTERN.test(payload),
        },
      };
    case ACTIONS.PASSWORD_CHANGE:
      const hasLowerCase = /[a-z]/.test(payload);
      const hasUpperCase = /[A-Z]/.test(payload);
      const hasNumber = /\d/.test(payload);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(payload);
      const minLength = payload.length >= 8;
      return {
        ...state,
        password: {
          value: payload,
          validations: {
            hasLowerCase: false,
            hasUpperCase: false,
            hasNumber: false,
            hasSpecialChar: false,
            minLength: false,
          },
        },
      };
    default:
      return state;
  }
};
