import { useEffect, useRef, useState } from 'react';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '@/Componts/Layout/popper';
import AccountsItem from '@/Componts/Layout/Components/AccountsItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './Search.module.scss'
import { SearchIcon } from '@/Componts/icons';

const cx = classNames.bind(style)

function Search() {

    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false)
    const [showLoading, setShowLoading] = useState(false)

    const inputRef = useRef()

    useEffect(() => {
        if (!searchValue) {
            setSearchResult([])
            return
        }
        setShowLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(reps => reps.json())
            .then(res => {
                setSearchResult(res.data)
                setShowLoading(false)
            })
            .catch(() => { setShowLoading(true) })
    }, [searchValue])



    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
        setSearchResult([])


    }

    const handleHideSearch = () => {
        setShowResult(false)
    }

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        {searchResult.map((result) => (
                            <AccountsItem key={result.id} data={result} />
                        ))}

                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideSearch}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Search accounts and video'
                    spellCheck={false}
                    onChange={e => setSearchValue(e.target.value)}
                    onClick={() => setShowResult(true)}
                />
                {searchValue && !showLoading && (
                    <button className={cx('clear')}
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {showLoading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')} >
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;