import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Create async Firebase API calls
export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user.toJSON();
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const signUp = createAsyncThunk(
  "user/signUp",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user.toJSON();
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const signOutUser = createAsyncThunk(
  "user/signOutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

const initialState = {
  user: null, //holds the full set of Firebase user properties
  isLoading: true, // Used to know if busy running the async actions
  errorCode: null, // Used to display user errors
  isAuthInitialized: false, // Used to know if the current user has yet to be set or not in the state
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setErrorCode: (state, action) => {
      state.errorCode = action.payload;
    },
    setIsAuthInitialized: (state, action) => {
      state.isAuthInitialized = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.errorCode = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.errorCode = action.payload;
      })
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.errorCode = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.errorCode = action.payload;
      })
      .addCase(signOutUser.pending, (state) => {
        state.isLoading = true;
        state.errorCode = null;
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
      })
      .addCase(signOutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errorCode = action.payload;
      });
  },
});

export const { setUser, setErrorCode, setIsAuthInitialized } =
  userSlice.actions;

export default userSlice.reducer;
