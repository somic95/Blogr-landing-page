import laptopDesktop from '../../images/illustration-laptop-desktop.svg'
import laptopMobile from '../../images/illustration-laptop-mobile.svg'

const blog3 = () => {
  return (
    <>
      <main className='font-Ubuntu'>
          <section className='flex flex-col lg:flex-row lg:pt-32'>

            <picture className='lg:-right-32 xl:w-3/5 lg:translate-x-[-28%] lg:translate-y-[-15%]'>
                <source media='(min-width: 1024px)' srcSet={laptopDesktop}/>
                <img src={laptopMobile} className='md:mt-20 mt-10 w-full'/>
            </picture>
            
            <div className='xl:w-1/2 lg:w-1/2 flex flex-col gap-8 mt-5 md:px-32 lg:px-0 text-center lg:text-left lg:mt-0 lg:translate-x-[-27%] xl:translate-y-[17%]'>
              <article>
                <h2 className='max-[425px]:text-2xl px-14 lg:px-0 lg:pb-10 pb-5 text-center lg:text-left text-Very-dark-blue'>Free, open, simple</h2>
                <p className='text-Very-dark-grayish-blue/50 tracking-wide px-10 lg:px-0'>Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
              </article>
              <article>
                <h2 className='max-[425px]:text-2xl px-14 lg:px-0 lg:pb-10 pb-5 text-center lg:text-left text-Very-dark-blue'>Powerful tooling</h2>
                <p className='text-Very-dark-grayish-blue/50 tracking-wide px-10 lg:px-0 pb-20'>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites.</p>
              </article>
            </div>
            
          </section>
      </main>
    </>
  )
}

export default blog3