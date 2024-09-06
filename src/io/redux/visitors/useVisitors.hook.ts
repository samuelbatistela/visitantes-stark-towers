/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../root.reducer";
import {
  VisitorsState,
  VisitorsTypes,
  SET_VISITORS,
  SET_RESET_VISITORS,
  SET_VISITOR_ADD,
  SET_VISITOR_REMOVE,
  SET_VISITOR_CHECKOUT,
} from "./visitors.types";

const useVisitors = () => {
  const { visitors, history } = useSelector<AppState, VisitorsState>(
    (state) => ({
      visitors: state.visitors.visitors,
      history: state.visitors.history,
    })
  );

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch<Dispatch<VisitorsTypes>>();

  const setVisitorAdd = useCallback(
    async (visitor: any) => {
      setIsLoading(true);

      const sameRoomVisitors = visitors
        ? visitors.filter((_visitor) => _visitor.room === visitor.room)
        : [];

      if (sameRoomVisitors.length >= 3) {
        setIsLoading(false);
        return false;
      }

      dispatch({
        type: SET_VISITOR_ADD,
        payload: visitor,
      });

      setIsLoading(false);

      return true;
    },
    [dispatch, visitors]
  );

  const setVisitorRemove = useCallback(
    async (visitor: any) => {
      setIsLoading(true);

      dispatch({
        type: SET_VISITOR_REMOVE,
        payload: visitor,
      });

      setIsLoading(false);

      return true;
    },
    [dispatch]
  );

  const setVisitors = useCallback(
    async (_visitors: any) => {
      setIsLoading(true);

      dispatch({
        type: SET_VISITORS,
        payload: _visitors,
      });

      setIsLoading(false);

      return true;
    },
    [dispatch]
  );

  const setResetVisitors = useCallback(async () => {
    setIsLoading(true);

    dispatch({
      type: SET_RESET_VISITORS,
      payload: null,
    });

    setIsLoading(false);

    return true;
  }, [dispatch]);

  const setVisitorCheckout = useCallback(
    async (visitor: any) => {
      setIsLoading(true);

      dispatch({
        type: SET_VISITOR_CHECKOUT,
        payload: visitor,
      });

      setIsLoading(false);

      return true;
    },
    [dispatch]
  );

  return {
    visitors,
    history,
    isLoading,
    setVisitorAdd,
    setVisitorRemove,
    setVisitors,
    setResetVisitors,
    setVisitorCheckout,
  };
};

export default useVisitors;
