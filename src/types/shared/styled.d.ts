/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { theme } from '../../config/styles/theme';

type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
