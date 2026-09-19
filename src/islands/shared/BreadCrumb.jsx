// React version of BreadCrumb, used only inside page-level React islands
// (About, Room, RoomDetails) where the whole page is already one island.
// The native src/components/BreadCrumb.astro is used everywhere else.
const BreadCrumb = ({ title }) => {
    return (
        <section className="bg-[url('/images/inner/breadcumb.jpg')] bg-no-repeat bg-cover h-[550px] bg-center grid items-center justify-center">
            <div className="mt-10 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-10 lg:leading-[60px] 2xl:leading-[70px] text-white font-semibold font-Garamond uppercase">
                    {title}
                </h1>
                <div className="flex items-center justify-center">
                    <a
                        href="/"
                        className="text-base lg:text-2xl leading-10 2xl:leading-[70px] text-khaki font-semibold font-Garamond flex items-center"
                    >
                        Home <span className="mx-2 text-white">/</span>
                    </a>
                    <span className="text-base lg:text-2xl leading-10 2xl:leading-[70px] text-white font-semibold font-Garamond capitalize">
                        {title}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default BreadCrumb;
