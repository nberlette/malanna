import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

type CoverImageProps = {
  title?: string | any,
  url?: string | any,
  slug?: string | any,
  classes?: any[] | any,
  width?: number | any,
  height?: number | any
}

export default function CoverImage({
  title,
  url,
  slug,
  classes = [],
  width = 2000,
  height = 1000
}: CoverImageProps = {}) {
  // props.alt = props.alt || `Cover Image for ${title}`;
  
  const image = (
    <Image
      alt={title}
      width={width || 2000}
      height={height || 1000}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      }, ...classes)}
      src={url}
      // placeholder={'blur'}
    />
  );

  return (
    <div className={cn('sm:mx-0')}>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title} title={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
