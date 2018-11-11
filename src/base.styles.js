import {StyleSheet, Dimensions} from 'react-native';

export const phoneDimensions = {
	fullHeight: Dimensions.get('window').height,
	fullWidth: Dimensions.get('window').width,
};

export const colors = {
	blue: '#255df4',
	white: '#FFFFFF',
	gray: 'gray',
	black: 'black',
	orange: '#ff6738',
	backgroundGray: '#EFEFEF',
};

export const dimensions = {
	xs: 8,
	sm: 10,
	md: 15,
	lg: 20,
	xl: 30,
	xxl: 40,
};

export const fonts = {
	xs: 12,
	sm: 14,
	md: 16,
	lg: 18,
	xl: 24,
	xxl: 38,
	xxxl: 58,
	primary: 'Roboto',
};

export const baseStyles = {
    container: {
		flex: 1,
		backgroundColor: colors.backgroundGray,
    },
};

export default function createStyles(overrides = {}) {
	return StyleSheet.create({...baseStyles, ...overrides});
}
