import { Axios } from "axios";
import { createContext } from "react";

export const ApiContext = createContext<Axios | null>(null);