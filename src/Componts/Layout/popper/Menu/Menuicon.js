import Button from "../../Components/button";
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function MenuIcon({ data }) {
    return (
        <Button className={cx('menu_item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuIcon;