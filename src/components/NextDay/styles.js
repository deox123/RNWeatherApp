import createStyles, {colors, baseStyles, fonts} from '../../base.styles';

const styles = createStyles({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        marginHorizontal: 2.5,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    day: {
        fontSize: fonts.xs,
        fontWeight: '500',
        padding: 10,
    },
    icon: {
        width: 70,
        height: 70,
    },
    temperatures: {
        flexDirection: 'row',
    },
    minTemp: {
        color: colors.gray,
        fontSize: fonts.md,
        paddingTop: 2,
    },
    maxTemp: {
        color: colors.black,
        fontSize: fonts.xl,
    },
    realTemp: {
        color: colors.black,
        fontSize: fonts.xs,
        paddingBottom: 5,
    },
});

export default styles;
