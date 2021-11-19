import Alert from '@components/alert'
import Footer from '@components/footer'
import Meta from '@components/meta'

export default function Layout({ preview, children, ...props }) {
  return (
    <>
      <Meta {props.meta && ...props.meta} />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>
	  {children}
	</main>
      </div>
      <Footer />
    </>
  )
}
