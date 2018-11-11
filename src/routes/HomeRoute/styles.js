import createStyles, {colors} from '../../base.styles';

const HomeStyles = createStyles({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundGray,
        justifyContent: 'center',
    },
    nextThreeDays: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 2.5,
        marginBottom: 5,
    },
});

export default HomeStyles;
