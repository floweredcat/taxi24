export const selectOrderModule = (store) => store.order;

export const selectIsOrderLoading = (store) =>
  ["idle", "loading"].includes(store.order.status);

export const selectOrderMessage = (state) => selectOrderModule(state).message;
