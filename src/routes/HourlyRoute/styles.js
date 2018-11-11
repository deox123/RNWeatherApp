import createStyles, {colors, fonts, baseStyles} from '../../base.styles';

const HourlyStyles = createStyles({
    container: {
        ...baseStyles.container,
        padding: 5,
    },
    title: {
        fontSize: fonts.lg,
        color: colors.black,
        padding: 10,
        flex: -1,
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: -2.5,
        justifyContent: 'center',
    },
    button: {
        backgroundColor: colors.orange,
        height: 50,
        flex: -1,
    },
    buttonTitle: {
        color: colors.white,
        fontSize: fonts.md,
        fontWeight: '400',
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
    },
});

export default HourlyStyles;
