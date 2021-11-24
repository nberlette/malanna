import Container from '@components/container';
import { GITHUB_URL, SHOW_GITHUB_BANNER } from '@lib/constants';
import cn from 'classnames';

export type AlertProps = {
  preview?: any,
  success?: boolean,
  error?: boolean,
  children?: any
}

export default function Alert({ preview, success, error }: AlertProps = {}) {
  if (!SHOW_GITHUB_BANNER) return;
    return (
      <div
        className={cn('border-b', {
          'bg-accent-7 border-accent-7 text-white': preview,
          'bg-accent-1 border-accent-2': !preview,
        })}
      >
        <Container>
          <div className="text-center text-sm py-2">
            {preview ? (
              <>
                This is page is a preview.{' '}
                <a
                  href="/api/exit-preview"
                  className="transition-colors duration-200 underline hover:text-cyan"
                >
                  Click here
                </a>{' '}
                to exit preview mode.
              </>
            ) : (
              SHOW_GITHUB_BANNER && (
                <>
                  The source code for this blog is{' '}
                  <a
                    href={GITHUB_URL}
                    className={cn(
                      'underline hover:shadow-sm',
                      {
                        'hover:text-success': !!success && !error,
                        'hover:text-warning': !!error && !success,
                      },
                      'duration-300 transition-all'
                    )}
                  >
                    available on GitHub
                  </a>
                  .
                </>
              )
            )}
          </div>
        </Container>
      </div>
    )
}
