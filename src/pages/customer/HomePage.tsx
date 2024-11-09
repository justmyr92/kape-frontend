import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import coffeeBeerCup from "../../assets/customer/coffee-beer-cup.png";
import cofferBeerCupPreview from "../../assets/customer/coffee_beer_cafe_preview.mp4";
import frappe from "../../assets/customer/frappe_img.png";
import pizza from "../../assets/customer/pizza_img.png";
import chicken from "../../assets/customer/chicken_img.png";

const HomePage = () => {
    return (
        <main>
            <Navbar />
            <section className="hero__section h-screen">
                <div className="container mx-auto flex justify-between px-1.5 py-4 h-full">
                    <div className="hero__main__content h-full w-[55%] flex flex-col gap-8 justify-center">
                        <div className="subtitle__container">
                            <h1 className="text-5xl text-amber-950">
                                Start your day with coffee.
                                <br />
                                End your day with bear.
                            </h1>
                        </div>
                        <div className="button__container">
                            <Link
                                to={"/menu"}
                                className="cta__btn rounded-lg border border-amber-950 bg-amber-950 text-white text-lg px-3 py-2.5 uppercase"
                            >
                                Discover Menu
                            </Link>
                        </div>
                    </div>
                    <div className="hero__image__content h-full w-[45%] flex items-center justify-center">
                        <img
                            src={coffeeBeerCup}
                            alt="coffee-beer-cup.png"
                            className="h-full"
                        />
                    </div>
                </div>
            </section>
            <section className="video__section h-[80vh] bg-gray-950 ">
                <div className="container mx-auto flex h-full justify-between px-1.5">
                    <div className="video__main__content flex w-full h-full gap-8 justify-center">
                        <video
                            className="w-full object-cover"
                            src={cofferBeerCupPreview}
                            type="video/mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>
            </section>
            <section className="drinks__demo__section h-[80vh]">
                <div className="container mx-auto flex h-full justify-between px-1.5 py-8 gap-10">
                    <div className="drinks__image__content h-full w-1/2">
                        <img
                            src={frappe}
                            alt="frappe.png"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="drinks__main__content h-full w-1/2 flex flex-col gap-8 justify-center">
                        <div className="subtitle__container">
                            <h1 className="text-5xl text-amber-950">
                                Take a sip and let the frappe do the talking.
                            </h1>
                        </div>
                        <div className="button__container">
                            <Link
                                to={"/menu"}
                                className="cta__btn rounded-lg duration-500 transition border border-amber-950 bg-text text-amber-950 text-lg px-3 py-2.5 uppercase hover:text-white hover:bg-amber-950"
                            >
                                Sip and Go
                            </Link>
                        </div>
                    </div>
                </div>
            </section>{" "}
            <section className="explore__demo__section">
                <div className="container mx-auto flex h-full justify-between px-1.5 py-8 gap-10">
                    <div className="flex flex-col justify-start w-1/2 gap-5">
                        <div className="explore__image__content">
                            <img
                                src={pizza}
                                alt="pizza.png"
                                className="w-[90%]"
                            />
                        </div>

                        <div className="subtitle__container">
                            <h1 className="text-5xl text-amber-950">
                                Savoring every moment and every bite.
                            </h1>
                        </div>
                        <div className="button__container">
                            <Link
                                to={"/menu"}
                                className="cta__btn rounded-lg duration-500 transition border border-amber-950 bg-text text-amber-950 text-lg px-3 py-2.5 uppercase hover:text-white hover:bg-amber-950"
                            >
                                Explore
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start w-1/2 gap-5">
                        <div className="explore__image__content">
                            <img
                                src={chicken}
                                alt="chicken.png"
                                className="w-[90%]"
                            />
                        </div>

                        <div className="subtitle__container">
                            <h1 className="text-5xl text-amber-950">
                                Winging my way to happinnes, one bite at a time
                            </h1>
                        </div>
                        <div className="button__container">
                            <Link
                                to={"/menu"}
                                className="cta__btn rounded-lg duration-500 transition border border-amber-950 bg-text text-amber-950 text-lg px-3 py-2.5 uppercase hover:text-white hover:bg-amber-950"
                            >
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
