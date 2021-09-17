export const defineAction = (actionName: string) => {
  return {
    type: actionName,
    get: (payload: any) => {
      return {
        type: actionName,
        payload: payload,
      };
    },
  };
};
