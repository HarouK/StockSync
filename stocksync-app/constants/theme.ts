import { Platform } from 'react-native';

const tintColorLight = '#2563EB';
const tintColorDark = '#FFFFFF';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#F3F4F6',
    card: '#FFFFFF',
    subtitle: '#6B7280',

    tint: tintColorLight,

    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },

  dark: {
    text: '#ECEDEE',
    background: '#121212',
    card: '#1E1E1E',
    subtitle: '#9CA3AF',

    tint: tintColorDark,

    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },

  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },

  web: {
    sans:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",

    serif:
      "Georgia, 'Times New Roman', serif",

    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",

    mono:
      "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});