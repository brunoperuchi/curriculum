import homePhoto from '../assets/home-photo.jpg'

export function Home() {
  return (
    <section className='w-full pt-36 mb-5 flex flex-row flex-wrap-reverse items-center justify-around'>
      <div className='m-1 text-center'>
        <h1 className='text-lg md:text-2xl text-purple-800'>
        👋🏻 Hello, i'm <strong>Bruno Paulino Peruchi</strong>.
        </h1>
        <p className='text-sm md:text-lg text-zinc-100'>
          Web Developer
        </p>
      </div>
      <img
        src={homePhoto}
        alt="Bruno Peruchi photo"
        className='h-36 md:h-64 w-36 md:w-64 m-1 rounded-full border-2 border-purple-800 shadow-md md:shadow-lg'
      />
    </section>
  );
}