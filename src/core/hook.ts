import { Button } from "@/components/Button.js";
import type { Component } from "./Component.js";


type setState<T> = (val:T) => void;
type getState<T> = () => T;

type state = {
    get:getState<any>,
    set:setState<any>
}

export function useState<T>(val:T | undefined = undefined,comp:Component):any{
    console.log("useState called");
    if(!comp){
        throw new Error("no parent found hooks should be called under the React componets");
    }

    const state = {
        value:val,
        get: function(){
            return this.value;
        },
        set: function(newVal: (val:T | undefined) => (T | undefined) | T){
            let nxtval = typeof newVal === "function" ? newVal(this.value) : newVal;
            if(nxtval === this.value) return;
            this.value = nxtval;
            comp.rerender();
        }
    }

    return state;
}