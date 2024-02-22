import editorDesk from '../../images/illustration-editor-desktop.svg'
import editorMobile from '../../images/illustration-editor-mobile.svg'

const blog1 = () => {
  return (
    <>
      <main className='font-Ubuntu'>
        <h1 className='text-Very-dark-blue max-[425px]:text-2xl mt-20 md:mt-28 lg:mt-20 xl:mt-32 text-center'>Designed for the future</h1>
          <section className='flex flex-col-reverse lg:relative lg:pt-32 lg:pl-32'>
            <div className='xl:w-1/2 lg:w-3/5 flex flex-col gap-16 mt-20 md:px-32 lg:px-0 text-center lg:text-left lg:mt-0'>
              <article className='lg:pr-16 xl:pr-32'>
                <h2 className='max-[425px]:text-2xl px-14 lg:px-0 lg:pb-10 pb-5 text-center lg:text-left text-Very-dark-blue'>Introducing an extensible editor</h2>
                <p className='text-Very-dark-grayish-blue/50 tracking-wide px-10 lg:px-0'>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
    change the looks of a blog.</p>
              </article>
              <article className='lg:pr-32'>
                <h2 className='max-[425px]:text-2xl px-14 lg:px-0 lg:pb-10 pb-5 text-center lg:text-left text-Very-dark-blue'>Robust content management</h2>
                <p className='text-Very-dark-grayish-blue/50 tracking-wide px-10 lg:px-0 pb-60'>Flexible content management enables users to easily move through posts. Increase the usability of your blog 
    by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
              </article>
            </div>
              <picture className='lg:absolute lg:-right-32 lg:w-1/2 xl:w-3/5 xl:-right-60 lg: lg:top-20 xl:-top-28'>
                <source media='(min-width: 1024px)' srcSet={editorDesk}/>
                <img src={editorMobile} className='md:mt-20 mt-10 w-full'/>
            </picture>
          </section>
      </main>
    </>
  )
}

export default blog1