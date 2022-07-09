import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Header.module.scss'
import Menu from '../../popper/Menu';

import Button from '../button';
import images from '@/assets/imgs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCircleQuestion, faCircleXmark, faCloudArrowUp, faEllipsisVertical, faGear, faGlobe, faHouseChimneyUser, faKeyboard, faRightToBracket, faSearch, faSignOut, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '@/Componts/Layout/popper';
import AccountsItem from '@/Componts/Layout/Components/AccountsItem';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { MessageIcon, InboxIcon, UploadIcon } from '@/Componts/icons';
import Image from '@/Componts/img';
const cx = classNames.bind(style)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: "/feedback"
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    },
]

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0);
    }, [])

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':

                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: "/Binh"
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Get coins',
            to: "/coin"
        },
        {
            icon: <FontAwesomeIcon icon={faChartLine} />,
            title: 'View analytics',
            to: "/analytics"
        },
        {
            icon: <FontAwesomeIcon icon={faHouseChimneyUser} />,
            title: 'LIVE center',
            to: "/LIVE"
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: "/Settings"
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: "/out",
            separate: true
        },
    ]

    const notification = 111;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')} >
                <img className={cx('img-logo')}
                    src={images.logo} alt='Tiktok' />
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
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
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                content='Upload video'
                                placement='bottom'
                            >
                                <button className={cx('action-btn')} >
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy
                                content='Message'
                                placement='bottom'
                            >
                                <button className={cx('action-btn')} >
                                    <MessageIcon />

                                </button>
                            </Tippy>

                            <Tippy
                                content='InBox'
                                placement='bottom'
                            >
                                <button className={cx('action-btn')} >
                                    <InboxIcon />
                                    <span className={cx('badge')}>{notification < 99 ? notification : 99}</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text >UpLoad</Button>
                            <Button primary rightIcon={<FontAwesomeIcon icon={faRightToBracket} />} >Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>

                        {currentUser ? (
                            <Image className={cx('user-avartar')}
                                src='https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/274664884_1007804556837758_2729035192511481397_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=dE8YBo7sphkAX_7MNHJ&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT_d9OHZhfJfvUbVEaKApEUkdHvZ5g3SXAf6yttLUf7ykg&oe=62CBED2C'
                                alt='Binh Nhu Ngo'
                                fallback='https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'
                            />
                        ) : (
                            <button className={cx('more-btn')} >
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>

            </div>
        </header >)
}

export default Header;