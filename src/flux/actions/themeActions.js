/* eslint-disable import/prefer-default-export */
import actionTypes from '../constants';

export const switchTheme = theme => ({
  type: actionTypes.SWITCH_THEME,
  payload: theme
});
