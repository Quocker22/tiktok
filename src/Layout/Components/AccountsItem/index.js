import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from "./Accounts.module.scss";
import Image from '@/Components/img';

const cx = classNames.bind(style)

function AccountsItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')}
                src={data.avatar}
                alt={data.last_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span >{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('usename')} >{`@${data.nickname}`}</span>
            </div>
        </Link>
    )
}

AccountsItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default AccountsItem;