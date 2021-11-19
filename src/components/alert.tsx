import Container from '@components/container'
import cn from 'classnames'
import { GITHUB_URL } from '@lib/constants'

export default function Alert({ preview, success, error }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{' '}
              <a
                href={GITHUB_URL}
		className={cn("underline hover:shadow-sm", {"hover:text-success": !!success && !error, "hover:text-warning": !!error && !success}, "duration-300 transition-all")}
	      >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
