import createStyles, {colors, dimensions, fonts} from '../../base.styles';

const styles = createStyles({
    container: {
        flex: 1.6,
        padding: dimensions.md,
        paddingBottom: 0,
        backgroundColor: colors.white,
        margin: 5,
    },
    text: {
        fontSize: fonts.lg,
        color: colors.white,
        fontWeight: '600',
        paddingLeft: 20,
    },
    heading: {
        color: colors.orange,
        fontWeight: '500',
        fontSize: fonts.md,
    },
    main: {
        flex: 3,
    },
    mainColumns: {
        flexDirection: 'row',
    },
    mainLeft: {
        flex: 1,
    },
    temperatures: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    maxTemp: {
        fontSize: fonts.xxxl,
        color: colors.black,
        paddingRight: 10,
    },
    minTemp: {
        fontSize: fonts.xxl,
        color: colors.gray,
        paddingTop: 5,
    },
    description: {
        fontSize: fonts.lg,
        color: colors.gray,
    },
    icon: {
        flex: 1,
    },
    details: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderStyle: 'solid',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: colors.backgroundGray,
        marginHorizontal: -15,
        paddingVertical: 3,
    },
    detailsText: {
        color: colors.black,
        fontSize: fonts.md,
        padding: 2,
        paddingHorizontal: 15,
    },
    grayText: {
        color: colors.gray,
    },
    detailsRight: {
        alignItems: 'flex-end',
    },
    button: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.blue,
        fontSize: fonts.md,
        fontWeight: '400',
        textAlign: 'right',
        flex: 1,
        textAlignVertical: 'center',
        marginRight: 5,
    },
    arrow: {
        width: 14,
        height: 14,
    },
});

export default styles;
