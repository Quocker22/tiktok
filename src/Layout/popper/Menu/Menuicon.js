import Button from "../../Components/button";
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function MenuIcon({ data, onClick }) {
    const classes = cx('menu_item', {
        separate: data.separate
    })

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuIcon;