import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Header.module.scss'
import images from '@/assets/imgs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '@/Componts/Layout/popper';
import AccountsItem from '@/Componts/Layout/Components/AccountsItem';

const cx = classNames.bind(style)

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 0);
    })

    return <header className={cx('wrapper')}>
        <div className={cx('inner')} >
            <img className={cx('img-logo')} src={images.logo} alt='Tiktok' />
            <Tippy
                interactive
                visible={searchResult}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountsItem />
                            <AccountsItem />
                            <AccountsItem />
                            <AccountsItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder='Search accounts and video' spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>

                </div>
            </Tippy>
            <div className={cx('actions')}>
                <h1>actions</h1>
            </div>
        </div>
    </header>
}

export default Header;