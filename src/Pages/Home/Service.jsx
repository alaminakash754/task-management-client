const Service = () => {
    return (
        <div className="my-5">
            <h1 className="text-center text-2xl text-yellow-500 font-semibold my-14">--- Benefits From Here ---</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10  mx-auto">
                <div className="card  bg-base-100 shadow-xl shadow-yellow-300">
                    <div className="card-body  items-center">
                        <h2 className="card-title text-yellow-500">Individuals and Freelancers</h2>
                    </div>
                    <figure><img className="w-full h-[350px]" src="https://i.ibb.co/tqk3RkM/7607115-3670301.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card  bg-base-100 shadow-xl shadow-yellow-300">
                    <div className="card-body  items-center">
                        <h2 className="card-title text-yellow-500">Remote Teams</h2>
                    </div>
                    <figure><img className="w-full h-[350px]" src="https://i.ibb.co/XWRhTKf/7118756-3426526.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card  bg-base-100 shadow-xl shadow-yellow-300">
                    <div className="card-body  items-center">
                        <h2 className="card-title text-yellow-500">Bankers</h2>
                    </div>
                    <figure><img className="w-full h-[350px]" src="https://i.ibb.co/5RJGcVK/4134338-2161619.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card  bg-base-100 shadow-xl shadow-yellow-300">
                    <div className="card-body  items-center">
                        <h2 className="card-title text-yellow-500">Software Development Teams</h2>
                    </div>
                    <figure><img className="w-full h-[350px]" src="https://i.ibb.co/85xKxyd/22344038-Team-of-programmers-working-on-program-code-with-laptops.jpg" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default Service;