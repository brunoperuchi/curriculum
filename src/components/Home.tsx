import homePhoto from '../assets/home-photo.jpg'

export function Home() {
  return (
    <section className='w-full pt-36 mb-5 flex flex-row flex-wrap-reverse items-center justify-around'>
      <div className='m-5 text-center md:text-left'>
        <h1 className='text-2xl text-purple-800'>
          Hello, i'm <strong>Bruno Paulino Peruchi</strong>.
        </h1>
        <p className='text-zinc-100'>
          Web Developer
        </p>
      </div>
      <img
        src={homePhoto}
        alt="Bruno Peruchi photo"
        className='h-36 md:h-64 w-36 md:w-64 m-5 rounded-full border-2 border-purple-800 shadow-md md:shadow-lg'
      />
    </section>
  );
}