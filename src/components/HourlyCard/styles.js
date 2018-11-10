import createStyles, {colors, baseStyles, fonts} from '../../base.styles';

const styles = createStyles({
    container: {
        minHeight: 180,
        backgroundColor: colors.white,
        margin: 2.5,
        flex: 1,
        flexShrink: 0,
        flexBasis: '21%',
        paddingLeft: 15,
        maxWidth: '25%',
        maxHeight: '50%',
    },
    hour: {
        color: colors.black,
        paddingVertical: 5,
    },
    icon: {
        height: 50,
        width: 50,
    },
    desc: {
        color: colors.gray,
        fontSize: fonts.xs,
        height: 35,
    },
    temperature: {
        color: colors.black,
        fontSize: 33,
        marginVertical: -5,
    },
    wind: {
        color: colors.black,
        fontSize: fonts.xs,
    },
});

export default styles;
