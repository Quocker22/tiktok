import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '@/Layout/popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuIcon from "./Menuicon";
import Header from "./header";
import { useState } from "react";

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, onChange, ...passProps }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuIcon key={index} data={item} onClick={() => {
                    if (isParent) {
                        setHistory(pre => [...pre, item.children])
                    } else {
                        onChange(item);
                    }
                }} />
            )
        });
    };

    return (
        <Tippy
            {...passProps}
            hideOnClick={hideOnClick}
            interactive
            offset={[12, 8]}
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu_list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title="Language" onBack={() => {
                            setHistory(pre => pre.slice(0, pre.length - 1))
                        }} />}
                        <div className={cx('menu-body')}>
                            {renderItems()}
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory(pres => pres.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;