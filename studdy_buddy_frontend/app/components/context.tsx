import { createContext, useContext, useState, useEffect } from "react";
const authContext = createContext<any>(null);

export default authContext;