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
  
  const newImageSrc = url.toString().replace(/[()]/g, '');
    const convertImage = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#222" offset="20%" />
          <stop stop-color="#ddd" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#bbb" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" filter="blur(5em)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

  const toBase64 = (str) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);

  const image = (
    <Image
      alt={title}
      width={width || 2000}
      height={height || 1000}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      }, ...classes)}
      src={url}
      placeholder={'blur'}
      blurDataURL={`data:image/svg+xml;base64,${toBase64(convertImage(width || 2000, height || 1000))}`}
      layout="intrinsic"
    />
  );

  return (
    <div className={cn('sm:mx-0')}>
      {slug ? (
        <Link href={`/posts/${slug}`} passHref>
          <a aria-label={title} title={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
