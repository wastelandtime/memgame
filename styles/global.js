import { StyleSheet } from 'react-native';

export const BG_COLOR = '#343336';
export const BAR_COLOR = '#4e4d52';
export const TEXT_COLOR = '#e5dbda';
export const HEADER_TEXT_COLOR = '#fff';
export const MUTED_COLOR = '#8e8786';
export const LINK_COLOR = '#48e9d9';
export const ACCENT_COLORS = ['#d31d65', '#751c53', '#c248c0', '#7d6e8b', '#bbc6f7'];
export const GD = '#405952';
export const GL = '#9C9B7A';
export const NU = '#FFD393';
export const OL = '#FF974F';
export const OD = '#F54F29';

export const COMMON_STYLES = StyleSheet.create({
  pageContainer: {
    backgroundColor: BG_COLOR,
    marginTop: 0,
    paddingTop: 5,
    paddingHorizontal: 10
  },
  text: {
    color: TEXT_COLOR,
    fontFamily: 'Helvetica Neue'
  }
});
