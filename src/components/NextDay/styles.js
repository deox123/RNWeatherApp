import createStyles, {colors, baseStyles, fonts} from '../../base.styles';

const HeaderStyles = createStyles({
    container: {
        flex: 1 / 3,
        backgroundColor: 'blue',
    },
    text: {
        fontSize: fonts.lg,
        color: colors.white,
        fontWeight: '600',
        paddingLeft: 20,
    },
    main: {
        flex: 3,
    },
    sub: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    right: {
        // alignSelf: 
    },
    button: {
        flex: 1,
    },
});

export default HeaderStyles;
