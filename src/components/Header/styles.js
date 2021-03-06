import createStyles, {colors, fonts} from '../../base.styles';

const HeaderStyles = createStyles({
    container: {
        height: 45,
        backgroundColor: colors.blue,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: fonts.lg,
        color: colors.white,
        fontWeight: '600',
        paddingLeft: 20,
    },
    arrow: {
        width: 14,
        height: 14,
        marginHorizontal: 20,
    },
});

export default HeaderStyles;
