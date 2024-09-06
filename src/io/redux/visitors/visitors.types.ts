/* eslint-disable @typescript-eslint/no-explicit-any */

interface Visitor {
  id: string;
  name: string;
  cpf: string;
  room: string;
  birthDate: string;
  startDateTime: string;
  endDateTime: string;
}

export type VisitorsState = {
  visitors: Visitor[];
  history: Visitor[];
};

export const SET_VISITORS = "SET_VISITORS";
export const SET_RESET_VISITORS = "SET_RESET_VISITORS";
export const SET_VISITOR_ADD = "SET_VISITOR_ADD";
export const SET_VISITOR_REMOVE = "SET_VISITOR_REMOVE";
export const SET_VISITOR_CHECKOUT = "SET_VISITOR_CHECKOUT";

type setVisitors = {
  type: typeof SET_VISITORS;
  payload: [];
};

type setResetVisitors = {
  type: typeof SET_RESET_VISITORS;
  payload: any | null;
};

type setVisitorAdd = {
  type: typeof SET_VISITOR_ADD;
  payload: any | null;
};

type setVisitorRemove = {
  type: typeof SET_VISITOR_REMOVE;
  payload: any | null;
};

type setVisitorCheckout = {
  type: typeof SET_VISITOR_CHECKOUT;
  payload: any | null;
};

export type VisitorsTypes =
  | setVisitors
  | setResetVisitors
  | setVisitorAdd
  | setVisitorRemove
  | setVisitorCheckout;
