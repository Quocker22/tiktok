import Tippy from "@tippyjs/react";
import { Wrapper as PopperWrapper } from '@/Componts/Layout/popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuIcon from "./Menuicon";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuIcon key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            delay={[100, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu_list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;