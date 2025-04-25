import Image from "next/image"
import userAvatar from "@/assets/user.svg";
import plusIcon from "@/assets/plus.svg";
import microphoneIcon from "@/assets/microphone.svg";
import paperPlaneIcon from "@/assets/paperPlane.svg";

export default function Main() {
    return (
        <main className="w-[calc(1280px-384px)] h-full flex flex-col">
            {/* User info section */}
            <section className="w-full h-18 bg-slate-800 flex flex-row justify-start items-center rounded-tr-2xl">

                {/* user avatar section */}
                <section className="w-20 h-full flex justify-center items-center gap-2">
                    <Image className="w-9 h-full rounded-2x fill-slate-300" src={userAvatar} alt="user avatar svg" />
                </section>

                {/* name and time of the last message */}
                <section className="w-auto h-full flex flex-col justify-center items-start">
                    {/* username */}
                    <section className="w-auto h-auto flex justify-start items-center">
                        <span className="text-base text-slate-50">Mario Leandro</span>
                    </section>

                    {/*  */}
                    <section className="w-auto h-auto flex justify-start items-center">
                        <span className="text-xs text-slate-50">Visto por último hoje às 16:51</span>
                        {/* <span>Online</span> */}
                        {/* <span>Digitando...</span> */}
                    </section>
                </section>
            </section>

            <section className="w-full h-full bg-slate-200">

            </section>

            <section className="w-full h-20 bg-slate-800 flex flex-row justify-center items-center rounded-br-2xl">
                {/* Here will be button for send a image, document, file, or whatever */}
                <section className="w-16 h-full flex justify-center items-center">
                    <button className="w-5 h-5 cursor-pointer flex justify-center items-center">
                        <Image className="w-full h-full" src={plusIcon} alt="plus icon" />
                    </button>
                </section>

                <section className="w-full h-full flex justify-center items-center">
                    <input className="w-full h-[70%] text-base bg-slate-700 rounded-2xl outline-0 px-3 py-0.5 cursor-text" type="text" />
                </section>

                {/* Here will be button for record the audio */}
                <section className="w-16 h-full flex justify-center items-center">
                    <button className="w-5 h-5 cursor-pointer flex justify-center items-center">
                        <Image className="w-full h-full" src={microphoneIcon} alt="microphone icon" />
                    </button>
                    <button className="w-5 h-5 cursor-pointer justify-center items-center hidden">
                        <Image className="w-full h-full" src={paperPlaneIcon} alt="paper plane svg" />
                    </button>
                </section>
            </section>
        </main>
    )
}

// Limit a size for display like a tablet 


// Input logic to test
/*
    if(input == "") {
        button = microphone icon
    } else {
        button = send message 
    }
*/