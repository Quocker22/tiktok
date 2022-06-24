import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from "./Accounts.module.scss";

const cx = classNames.bind(style)

function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4de7b9ebb4d7d9c71a5d6cde3000c841~c5_300x300.webp?x-expires=1655964000&x-signature=LEZS9tyHDJty5k%2BEkX4mq%2Ft2RIs%3D"
                alt='Ngan' />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span >Mai le Ngan </span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usename')} >@QuocProPlayer</span>
            </div>
        </div>
    )
}

export default AccountsItem;