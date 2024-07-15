import { useInView } from 'react-intersection-observer'
import './LazyImage.scss'

interface ILazyImageProps {
  imageSrc: string
  imageAlt: string
}

function LazyImage({ imageSrc = '', imageAlt = '' }: ILazyImageProps) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className='lazy-image'>
      {inView && <img src={imageSrc} alt={imageAlt} />}
    </div>
  )
}

export default LazyImage
