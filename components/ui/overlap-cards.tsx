"use client"

import { cn } from "@/lib/utils";
import Image from "next/image";

export const OverlapCards = () => {

    // const images = [
    //     "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // ];
    // const [hovered, setHovered] = useState<number | null>(null);
    // const cards = [
    //     {
    //         title: "Peer Reviewer – Cureus Journal",
    //         src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     },
    //     {
    //         title: "Member – Indian Orthodontic Society",
    //         src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     },
    //     {
    //         title: "Fellow – World Federation of Orthodontists",
    //         src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     },
    //     {
    //         title: "Member – American Association of Orthodontists",
    //         src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     },
    //     {
    //         title: "Member – International Orthodontics Foundation",
    //         src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     },
    //     {
    //         title: "Member – Emirates Orthodontic Society",
    //         src: "https://assets.aceternity.com/the-first-rule.png",
    //     },
    //     {
    //         title: "Member – Indian Dental Association",
    //         src: "https://assets.aceternity.com/the-first-rule.png",
    //     },
    //     {
    //         title: "Member – Saudi Orthodontic Society",
    //         src: "https://assets.aceternity.com/the-first-rule.png",
    //     },
    // ];

    // const imageVariants = {
    //     whileHover: {
    //         scale: 1.1,
    //         rotate: 0,
    //         zIndex: 100,
    //     },
    //     whileTap: {
    //         scale: 1.1,
    //         rotate: 0,
    //         zIndex: 100,
    //     },
    // };

    const affiliations = [
        {
            title: "Peer Reviewer – Cureus Journal",
            icon: "/journal-book.png", // journal/reviewer
        },
        {
            title: "Member – Indian Orthodontic Society",
            icon: "/teeth.png", // dental/orthodontics
        },
        {
            title: "Fellow – World Federation of Orthodontists",
            icon: "/globe.png", // global membership
        },
        {
            title: "Member – American Association of Orthodontists",
            icon: "/usa-flag.png", // or flag-usa (FontAwesome)
        },
        {
            title: "Member – International Orthodontics Foundation",
            icon: "/network.png", // connections/global foundation
        },
        {
            title: "Member – Emirates Orthodontic Society",
            icon: "/landmark.png", // regional society
        },
        {
            title: "Member – Indian Dental Association",
            icon: "/hospital.png", // general dental/medical
        },
        {
            title: "Member – Saudi Orthodontic Society",
            icon: "/star.png", // recognition/society
        },
    ];


    return (
        // <div className="relative flex flex-col items-center p-8 gap-10 h-full overflow-hidden">
        //     {/* TODO */}
        //     {/* <div className="flex flex-row ">
        //         {images.map((image, idx) => (
        //             <motion.div
        //                 suppressHydrationWarning 
        //                 variants={imageVariants}
        //                 key={"images-first" + idx}
        //                 style={{
        //                     rotate: Math.random() * 20 - 10,
        //                 }}
        //                 whileHover="whileHover"
        //                 whileTap="whileTap"
        //                 className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
        //             >
        //                 <img
        //                     src={image}
        //                     alt="achivements"
        //                     width="500"
        //                     height="500"
        //                     className="rounded-lg h-20 w-20 md:h-30 md:w-30 lg:h-50 lg:w-50 object-cover shrink-0"
        //                 />
        //             </motion.div>
        //         ))}
        //     </div>
        //     <div className="flex flex-row">
        //         {images.map((image, idx) => (
        //             <motion.div
        //                 suppressHydrationWarning 
        //                 key={"images-second" + idx}
        //                 style={{
        //                     rotate: Math.random() * 20 - 10,
        //                 }}
        //                 variants={imageVariants}
        //                 whileHover="whileHover"
        //                 whileTap="whileTap"
        //                 className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
        //             >
        //                 <img
        //                     src={image}
        //                     alt="bali images"
        //                     width="500"
        //                     height="500"
        //                     className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
        //                 />
        //             </motion.div>
        //         ))}
        //     </div> */}

        //     <div className=" grid grid-cols-3 md:grid-cols-5 max-w-5xl mx-auto md:px-8 w-full">
        //         {cards.map((card, idx) => (
        //             <motion.div
        //                 suppressHydrationWarning
        //                 variants={imageVariants}
        //                 key={"images-first" + idx}
        //                 style={{
        //                     rotate: Math.random() * 20 - 10,
        //                 }}
        //                 whileHover="whileHover"
        //                 whileTap="whileTap"
        //                 className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
        //             >
        //                 {/* <img
        //                     src={image}
        //                     alt="achivements"
        //                     width="500"
        //                     height="500"
        //                     className="rounded-lg h-20 w-20 md:h-30 md:w-30 lg:h-50 lg:w-50 object-cover shrink-0"
        //                 /> */}


        //                 {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full"> */}
        //                     <Card
        //                         key={card.title}
        //                         card={card}
        //                         index={idx}
        //                         hovered={hovered}
        //                         setHovered={setHovered}
        //                     />
        //                 {/* </div> */}

        //             </motion.div>
        //         ))}
        //     </div>
        //     <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
        //     <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
        // </div>

        <div className=" grid md:grid-cols-3 lg:grid-cols-4 gap-10">
            {
                affiliations.map((item, key) => {
                    return (
                        <div key={key} className="max-w-xs w-full group/card">
                            <div
                                className={cn(
                                    " cursor-pointer overflow-hidden relative card h-48 border-2 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-evenly items-center p-4",
                                    // "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
                                )}
                            >
                                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black/50 opacity-20 blur-xl scale-[0.99]"></div>
                                <div className="flex flex-row items-center space-x-4 z-10">
                                    <Image
                                        height="100"
                                        width="100"
                                        alt="Avatar"
                                        src={item.icon}
                                        className="h-16 w-16 object-cover"
                                    />
                                </div>
                                <div className="text content">
                                    {/* <h1 className="font-bold text-xl md:text-2xl relative z-10">
                                        Author Card
                                    </h1> */}
                                    <p className="text-center md:text-lg font-medium text-slate-700 relative z-10 my-4">
                                       {item.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};