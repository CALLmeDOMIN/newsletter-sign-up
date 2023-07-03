"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    return (
        <div className="md:flex items-center justify-center min-h-screen">
            <div className="bg-white md:flex md:gap-8 md:p-6 rounded-3xl">
                {step === 0 && (
                    <>
                        <div className="relative md:hidden w-screen h-[40vh] flex flex-col">
                            <Image
                                src={"/illustration-sign-up-mobile.svg"}
                                fill
                                sizes="100vw"
                                alt="illustration sign up mobile"
                                className="absolute top-0 left-0 w-full h-full rounded-b-2xl object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h1 className="text-4xl font-bold py-4">
                                Stay updated!
                            </h1>
                            <p className="pt-2">
                                Join 60,000+ product managers receiving monthly
                                updates on:
                            </p>
                            <ul className="list-inside space-y-2 py-6">
                                <li className="flex items-start">
                                    <Image
                                        src={"/icon-list.svg"}
                                        alt="list icon"
                                        width={24}
                                        height={24}
                                        className="mr-4"
                                    />
                                    Product discovery and building what matters
                                </li>
                                <li className="flex items-start">
                                    <Image
                                        src={"/icon-list.svg"}
                                        alt="list icon"
                                        width={24}
                                        height={24}
                                        className="mr-4"
                                    />
                                    Measuring to ensure updates are a success
                                </li>
                                <li className="flex items-start">
                                    <Image
                                        src={"/icon-list.svg"}
                                        alt="list icon"
                                        width={22}
                                        height={22}
                                        className="mr-4"
                                    />
                                    And much more!
                                </li>
                            </ul>
                            <form>
                                <label
                                    htmlFor="email"
                                    className="text-xs font-bold"
                                >
                                    Email address
                                </label>
                                <input
                                    type="text"
                                    placeholder="email@company.com"
                                    pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$"
                                    required
                                    className={
                                        "placeholder-grey  p-4 px-6 border rounded-md w-full mt-2 mb-4 focus:ring" +
                                        (error
                                            ? " text-tomato ring-tomato focus:ring-tomato focus:outline-none border-tomato/50 bg-tomato/10"
                                            : " ring-darkSlateGrey focus:ring-darkSlateGrey focus:outline-none border-grey/50")
                                    }
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setError(false);
                                    }}
                                />
                                <input
                                    type="submit"
                                    value={"Subscribe to monthly newsletter"}
                                    className="bg-darkSlateGrey p-4 w-full rounded-md text-white font-bold hover:bg-tomato ease-in-out duration-300 transition-all cursor-pointer"
                                    onClick={() => {
                                        if (
                                            email.match(
                                                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                                            )
                                        )
                                            setStep(1);
                                        else setError(true);
                                    }}
                                />
                            </form>
                        </div>
                        <div className="relative min-h-full w-full hidden md:block">
                            <Image
                                src={"/illustration-sign-up-desktop.svg"}
                                fill
                                sizes="(max-width: 1440px): 25vw"
                                alt="desktop image"
                            />
                        </div>
                    </>
                )}
                {step === 1 && (
                    <div className="p-6 flex space-y-6 pt-20 pb-4 md:pt-6 md:pb-6 flex-col min-h-screen md:min-h-0 w-screen md:w-auto md:h-auto md:max-w-md">
                        <Image
                            src={"/icon-success.svg"}
                            alt="success"
                            width={64}
                            height={64}
                        />
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Thanks for subscribing!
                        </h1>
                        <p className="grow md:grow-0">
                            A confirmation email has been sent to{" "}
                            <span className="font-bold">{email}</span>. Please
                            open it and click the button inside to confirm your
                            subscription
                        </p>
                        <button
                            className="w-full font-bold text-white bg-darkSlateGrey text-center p-4 rounded-md hover:bg-tomato ease-in-out duration-300 transition-all"
                            onClick={() => setStep(0)}
                        >
                            Dismiss message
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
