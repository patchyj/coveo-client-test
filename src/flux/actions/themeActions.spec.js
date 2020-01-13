import { switchTheme } from './themeActions';

describe('switchTheme', () => {
  it('should create the switchTheme Action with a theme', () => {
    expect(switchTheme('light')).toEqual({
      type: 'SWITCH_THEME',
      payload: 'light'
    });
  });
});
