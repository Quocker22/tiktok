import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from "./Accounts.module.scss";

const cx = classNames.bind(style)

function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}
                src="https://cdn.nguyenkimmall.com/images/detailed/555/may-anh-cho-nguoi-moi.jpg"
                alt='Ngan' />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span >Mai le</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usename')} >@QuocProPlayer</span>
            </div>
        </div>
    )
}

export default AccountsItem;