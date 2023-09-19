import { Dispatch, SetStateAction } from "react";
import { MenuButton } from "./MenuButton";
import { motion } from "framer-motion";

export const Menu = (props: { onSectionChange: (value: number ) => void, menuOpened: boolean, setMenuOpened: Dispatch<SetStateAction<boolean>> }) => {
    const { onSectionChange, menuOpened, setMenuOpened } = props;

    return (
        <>
            <div className="z-20 fixed top-12 left-56 cursor-pointer" onClick={() => onSectionChange(0)}>
                <svg className="stroke-white" width="50" height="50" strokeWidth="8" viewBox="0 0 522 683" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M225.333 0.933309C198.667 2.79998 166 9.46664 143.333 17.3333C118.267 26.2666 88.2667 43.8667 70.9333 59.8667C64.5333 65.8667 63.8667 66.9333 64.2667 71.4667C64.8 77.4667 70 82.1333 74.9333 80.9333C76.5333 80.5333 82.2667 76.5333 87.3333 72.2667C122.533 42.5333 165.6 26.2666 222.667 21.3333C292.533 15.3333 366.133 30.1333 418 60.6667C444.8 76.4 468.533 96.2667 484.667 116.4C497.733 132.533 497.6 130.8 485.733 138.8C480 142.533 474.533 146.667 473.733 147.733C471.2 150.8 471.6 157.867 474.4 160.4C479.733 165.2 482.667 164.533 498 154.933C515.333 144.133 520 140 520 135.733C520 125.733 491.6 90.8 466.533 69.8667C412 24.4 334.267 -0.800025 250.933 0.266642C240.133 0.399975 228.667 0.666642 225.333 0.933309Z"/>
                    <path  d="M228 40.9333C185.867 44.9333 160.267 51.6 132.8 65.7333C84.6667 90.4 51.8667 136.933 41.8667 194.667C39.2 209.867 39.8667 236.4 43.3333 252.667C60 332.667 115.2 381.867 205.867 397.333C219.733 399.733 221.867 399.733 225.2 398C234.267 393.333 231.867 380.933 221.6 379.333C200.667 375.867 185.2 372.4 172.667 368.4C109.6 348.133 71.7333 304.267 62 240C58.4 216.533 60.4 195.733 68.6667 171.067C87.7333 114.133 129.733 78.9333 193.867 66C244 56 305.467 59.6 352.933 75.3333C381.467 84.8 410.133 101.067 429.6 118.8C434.667 123.333 435.067 124.133 433.067 125.333C431.867 126.133 422.4 133.2 411.867 141.2L392.933 155.867L387.467 152.4C378.267 146.533 352.133 134.8 336.4 129.333C303.2 117.867 265.6 112.8 236.267 115.733C215.867 117.867 202.133 121.467 187.333 128.667C140.133 151.6 121.733 201.2 144.267 244.4C149.6 254.533 169.333 274.667 180.4 281.2C190.267 287.067 209.067 294.133 221.6 296.667C233.333 299.2 257.6 301.333 275.067 301.333C325.6 301.333 378.267 317.467 409.2 342.267C434.133 362.267 451.733 392.8 458.533 428.267C464.4 459.2 463.067 482.267 454 510.267C436.933 562.267 400 596.667 344.133 612.533C319.2 619.733 301.6 621.867 268 621.733C236 621.733 217.867 619.733 191.067 613.333C153.6 604.267 117.867 586.533 92 564.133C88.6667 561.333 86.2667 558.667 86.6667 558.4C87.0667 558 93.6 553.067 101.333 547.333C109.067 541.6 118.4 534.267 122.133 531.2L129.067 525.333L142.667 533.333C168.4 548.133 201.6 559.867 231.467 564.8C249.333 567.733 286.667 568.133 301.333 565.467C316.267 562.8 331.2 557.733 344.667 550.933C361.067 542.533 378.4 525.467 385.733 510.533C401.733 477.867 395.467 443.333 368.667 416.667C347.067 395.2 315.867 383.333 277.6 382.4C265.467 382 265.067 382.133 261.867 385.733C257.6 390.667 257.867 394 262.533 398.8C266.133 402.4 267.2 402.667 276.267 402.667C289.067 402.667 308.8 406.133 320.667 410.267C349.733 420.667 369.867 442.4 373.467 467.2C378 499.2 356.533 527.333 318 539.867C301.333 545.2 287.733 547.067 266.667 546.933C225.467 546.8 185.2 535.067 146.533 512C138 506.8 129.867 502.667 128.533 502.667C125.467 502.667 122.533 504.533 109.333 515.467C103.867 519.867 92.1333 528.933 83.3333 535.333C62.4 550.667 60 552.933 60 557.6C60 562.133 64.6667 567.467 79.0667 579.733C117.067 611.867 166.8 632.8 222.667 640C228.933 640.8 244.533 641.867 257.333 642.267C370.8 646 446.667 601.467 474.4 514.667C485.733 478.933 485.333 439.867 473.067 401.333C468.267 386.267 458 365.733 449.6 354.4C424.667 320.4 385.467 297.6 334.667 287.467C313.067 283.2 297.867 281.6 269.333 280.667C219.6 279.067 194.667 270.933 173.733 249.867C146.533 222.267 149.2 181.2 179.733 157.333C223.467 123.333 312.267 130 380.533 172.667C394.133 181.067 395.467 180.933 412.267 167.6C420 161.467 432.533 152 440.133 146.533C447.6 141.067 455.867 134.8 458.267 132.4C466.267 124.8 464 120.267 443.6 102.933C394.133 61.0666 327.867 39.4666 251.333 40.2666C241.067 40.4 230.533 40.6666 228 40.9333Z"/>
                    <path  d="M42.9333 94.4C36.6667 95.3334 19.0667 128 10.9333 153.333C2.53332 179.733 0.666656 191.733 0.666656 218.667C0.666656 239.067 1.19999 246 3.73332 258.4C25.0667 364.4 103.867 428.933 225.333 440C233.733 440.8 252.667 441.867 267.333 442.533C288.667 443.6 295.867 444.4 303.333 446.667C332.533 455.867 342.533 474.667 326.4 490.267C316.267 499.867 304.133 504.4 281.867 506.667C236.133 511.333 181.867 492.8 139.6 458.133C127.333 448 125.467 448.133 113.067 459.6C89.3333 481.333 58.9333 504.8 24.4 527.867C0.79999 543.467 0.133323 544.533 5.73332 555.2C11.2 565.6 22 579.333 35.8667 593.6C77.7333 637.067 135.867 666 203.333 677.2C253.2 685.6 310.667 683.867 354.533 672.667C369.867 668.8 375.2 666.533 376.533 663.333C379.067 656.4 375.067 649.333 368.4 649.333C366.4 649.333 357.6 651.067 348.8 653.333C285.6 668.8 207.333 664.4 146.667 641.733C101.733 624.933 59.7333 595.067 34.4 561.733C31.0667 557.467 28 553.333 27.6 552.4C26.9333 551.467 32.8 546.667 43.4667 539.467C66.9333 523.333 87.0667 508 107.2 491.2C116.533 483.2 125.067 476.133 125.867 475.467C127.067 474.667 130.4 476.4 136.133 480.933C177.2 513.067 235.6 531.333 283.333 526.8C309.067 524.267 327.733 517.067 340.267 504.8C364.133 481.333 355.867 448.533 322 432.533C308 425.733 291.067 423.067 253.333 421.467C218.933 419.867 203.733 418 179.067 412C95.2 391.733 40.8 337.6 24 257.6C20.4 240.933 19.0667 212 21.2 197.2C25.3333 168.267 36.9333 136.133 52 112.533C56.6667 105.067 56.9333 102.8 53.3333 98.4C50.5333 94.6667 47.7333 93.6 42.9333 94.4Z"/>
                    <path  d="M240 155.6C211.067 158.533 187.733 171.333 179.067 189.2C176 195.333 175.333 198.4 175.333 206.667C175.467 215.467 176 217.733 180 225.067C187.733 239.467 202.533 249.867 224 256C231.6 258.133 240.533 259.067 261.333 260.133C313.467 262.533 340.4 266.4 368.667 275.6C429.6 295.2 471.467 335.067 490.933 392C509.2 445.6 505.733 502.133 481.067 551.333C465.067 583.067 445.067 605.733 415.6 625.067C401.067 634.667 398.267 638.267 401.467 643.733C402.533 645.733 404.933 648.133 406.933 649.2C410.133 651.067 410.933 650.933 417.467 647.467C430.267 640.8 445.733 628.933 460.133 614.533C489.2 585.467 509.2 547.6 518.933 502.667C521.467 490.8 521.867 484.667 522 462.667C522 435.6 520.933 426.8 515.2 403.733C510.533 385.2 506.133 373.467 497.2 355.867C472 306.933 426.8 271.467 367.333 254.133C339.733 246.133 309.333 241.867 270 240.667C256.8 240.133 241.2 238.933 235.467 237.867C196.4 230.4 182.133 203.467 208.267 186.133C229.733 171.867 275.333 171.867 316.133 186.133C339.867 194.4 364 207.867 383.867 223.867C395.6 233.333 397.067 233.067 411.6 220.267C418 214.667 429.2 205.2 436.4 199.333C443.733 193.6 450.133 187.467 450.8 185.733C453.067 179.733 448.133 172.933 441.467 172.933C437.2 172.933 433.867 175.2 411.2 194.267C402.933 201.067 395.867 206.667 395.467 206.667C395.067 206.667 391.2 204 387.067 200.8C361.867 181.867 326 165.6 295.333 159.467C275.733 155.6 254.667 154.133 240 155.6Z"/>
                </svg>
            </div>
            <button onClick={() => setMenuOpened(!menuOpened)} className="z-20 fixed top-12 right-56 p-3 bg-indigo-600 w-11 h-11 rounded-md">
                <div className={`bg-white h-0.5 rounded-md w-full transition-all ${ menuOpened ? "rotate-45 translate-y-0.5" : "" }`}>
                </div>
                <div className={`bg-white h-0.5 rounded-md w-full my-1 ${ menuOpened ? "hidden" : ""}`}>
                </div>
                <div className={`bg-white h-0.5 rounded-md w-full transition-all ${ menuOpened ? "-rotate-45" : "" }`}>
                </div>
            </button>
            <motion.div className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col ${menuOpened ? "w-500" : "w-0"} `}
                animate={
                    menuOpened ? "open" : "closed"
                  }
                variants={{
                    open: {
                        opacity: 1, 
                        width: "500px",
                        transition:{
                            duration: 0.5,
                            ease: [0.83, 0, 0.17, 1],
                        }
                    },
                    closed: {
                        opacity: 0, 
                        width: "0px",
                        transition:{
                            duration: 0.5,
                            ease: [0.83, 0, 0.17, 1],
                        }
                    }
                }}  
            >
                <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
                    <MenuButton label="About" onClick={() => onSectionChange(0)} />
                    <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
                    <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
                    <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
                </div>
                <div className="flex items-end justify-start mb-10 p-8">
                    <a href="https://www.linkedin.com/in/mat%C3%BA%C5%A1-sabat-571002118/"><motion.img className="w-10 mr-1 hover:scale-105" src="/linkedin-logo.png" alt="linkedIn" 
                        whileHover={{
                            scale: 1.1,
                        }}
                    /></a>
                    <a href="https://github.com/TediaN97"><motion.img className="w-10 mr-1" src="/github.png" alt="github" 
                        whileHover={{
                            scale: 1.1,
                        }}
                    /></a>
                    <a href="https://www.facebook.com/matus.sabat/"><motion.img className="w-10 mr-1 " src="/facebook_logo.png" alt="facebook"
                        whileHover={{
                            scale: 1.1,
                        }}
                    /></a>
                    <a href="https://www.instagram.com/matus.sabat/"><motion.img className="w-10 mr-1" src="/Instagram_logo.png" alt="instagram"
                        whileHover={{
                            scale: 1.1,
                        }}
                    /></a>
                </div>
            </motion.div>
        </>
    )

}