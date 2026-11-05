import { Button } from "@/components/Button.js";
import type { Component } from "./Component.js";


type setState<T> = (val:T) => void;
type getState<T> = () => T;

type state = {
    get:getState<any>,
    set:setState<any>
}

export function useState<T>(val:T | undefined = undefined,comp:Component):state{
    console.log("useState called");
    if(!comp){
        throw new Error("no parent found hooks should be called under the React componets");
    }

    let stateVal = val;
    
    const get:getState<T> = () => {
        return comp. as T;
    }
  return {}
}