import { StackActions } from '@react-navigation/native';
import { navigationRef } from '@navigators';

export enum NAVIGATION_TYPE {
  NAVIGATE = 0,
  RESET = 1,
  PUSH = 2,
  BACK = 3,
}
export interface DispatchNavigationAction {
  type: NAVIGATION_TYPE;
  routeName?: string;
  params?: any;
}
export function dispatchNavigationAction(action: DispatchNavigationAction) {
  const { routeName, params, type } = action;
  const { current } = navigationRef;
  const { reset, navigate, goBack, dispatch } = current || {};
  switch (type) {
    case NAVIGATION_TYPE.NAVIGATE:
      navigate && navigate(routeName as string, params);
      return;
    case NAVIGATION_TYPE.RESET:
      reset &&
        reset({
          index: 0,
          routes: [
            {
              name: routeName as string,
              params,
            },
          ],
        });
      return;
    case NAVIGATION_TYPE.BACK:
      routeName
        ? navigate &&
          navigate({
            key: routeName,
            params,
          })
        : goBack && goBack();
      return;
    case NAVIGATION_TYPE.PUSH:
      dispatch && dispatch(StackActions.push(routeName as string, params));
      return;
    default:
      return;
  }
}
