import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import pollsDataSlice from "./pollsDataSlice";

export const store = configureStore({
    reducer: {
        pollsData: pollsDataSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

