import Image from "next/image"
import userAvatar from "@/assets/user.svg";

export default function Navigation() {
    return (
        <aside className="w-96 h-full flex flex-col justify-start bg-slate-900">
            <section className="w-full h-16 p-4 flex justify-start items-center">
                <h1 className="text-2xl text-slate-50">Dev Chat</h1>
            </section>

            <section className="w-full h-auto flex justify-center items-center p-4">
                <input className="w-full h-9 text-base px-3 py-0.5 bg-slate-800 rounded-2xl outline-0" type="text" />   
            </section>

            <section className="w-full h-full flex flex-col justify-start items-center p-4">
                {/* Card with messages */}
                <section className="w-full h-14 flex flex-row gap-2">
                    {/* Card image */}
                    <section className="w-10 h-full flex justify-center items-center">
                        <Image className="w-full h-full" src={userAvatar} alt="user avatar svg" />
                    </section>

                    {/* Card Body */}
                    {/* 
                        The body is divided into two parts, the top and the bottom.
                        The top has 2 sections separated by justify-between => justify-content: space-between.
                        The first section will have the username and the second part will be the Time or Date of the last message.
                        The second section will have the last message and a notification count of the unread messages.
                    */}
                    <section className="w-full h-full flex flex-col justify-start items-center">
                        {/* Card top */}
                        <section className="w-full h-[50%] card-body-top flex flex-row justify-between items-center">
                            {/* Name of the user */}
                            <section className="w-auto h-full flex justify-center items-center">
                                <h1 className="text-lg text-slate-50">Mario Leandro</h1>
                            </section>

                            {/* Date or Last time of received a message */}
                            <section className="w-auto h-full flex justify-center items-center">
                                <p className="text-sm text-slate-50">20:18</p>
                            </section>
                        </section>

                        {/* Card bottom */}
                        <section className="w-full h-[50%]  flex flex-row justify-between items-center">
                            {/* Last Message */}
                            <section className="w-auto h-full flex justify-center items-center">
                                <p className="text-sm text-slate-50">Hello World!</p>
                            </section>

                            {/* count of unread message / notifications. */}
                            <div className="w-auto h-full flex justify-center items-center">
                                <p className="w-5 text-xs text-center text-slate-50 bg-green-700 p-0.5 rounded-2xl">1</p>
                            </div>
                        </section>
                    </section>
                </section>
            </section>
        </aside>
    )
}