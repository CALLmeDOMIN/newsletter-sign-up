import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="relative w-screen h-[40vh] flex flex-col">
                <Image
                    src={"/illustration-sign-up-mobile.svg"}
                    fill
                    sizes="100vw"
                    alt="illustration sign up mobile"
                    className="absolute top-0 left-0 w-full h-full rounded-b-2xl object-cover"
                />
            </div>
            <div className="p-6">
                <h1 className="text-4xl font-bold py-4">Stay updated!</h1>
                <p className="pt-2">
                    Join 60,000+ product managers receiving monthly updates on:
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
                    <label htmlFor="email" className="text-xs font-bold">
                        Email address
                    </label>
                    <input
                        type="text"
                        placeholder="email@company.com"
                        className="placeholder-grey p-4 px-6 border border-grey/50 rounded-md w-full mt-2 mb-4"
                    />
                    <input
                        type="submit"
                        value={"Subscribe to monthly newsletter"}
                        className="bg-darkSlateGrey p-4 w-full rounded-md text-white font-bold"
                    />
                </form>
            </div>
        </>
    );
}
