import { forwardRef, useState } from 'react'
import images from '@/assets/imgs';

const Image = forwardRef(({ src, alt, fallback: customFallback = images.NoImage, ...props }, ref) => {
    const [fallback, setfallback] = useState('');

    const handleError = () => {
        setfallback(customFallback)
    }

    return <img
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
    />
})

export default Image;