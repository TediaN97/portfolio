import { Section } from "./Section"

export const ContactSection = () => {
    return (
        <Section items="items-end">
            <h2 className="text-5xl font-bold">
                Contact me
            </h2>
            <div className="mt-8 p-8 rounded-md bg-white w-5/12 max-w-full">
                <form>
                    <label htmlFor="name" className="font-medium text-gray-900 block mb-1">
                        Name
                    </label>
                    <input 
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                    />
                    <label htmlFor="email" className="font-medium text-gray-900 block mb-1 mt-8">
                        Email
                    </label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                    />
                    <label htmlFor="email" className="font-medium text-gray-900 block mb-1 mt-8">
                        Message
                    </label>
                    <textarea 
                        name="message" 
                        id="message" 
                        className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                    />
                    <div className="flex justify-between">
                        <div className="flex  items-end justify-start p-2">
                            <a href="https://www.linkedin.com/in/mat%C3%BA%C5%A1-sabat-571002118/"><img className="w-10" src="/linkedin-logo.png" alt="linkedIn" /></a>
                            <a href="https://github.com/TediaN97"><img className="w-10" src="/github.png" alt="github"/></a>
                            <a href="https://www.facebook.com/matus.sabat/"><img className="w-10" src="/facebook_logo.png" alt="facebook"/></a>
                            <a href="https://www.instagram.com/matus.sabat/"><img className="w-10" src="/Instagram_logo.png" alt="instagram"/></a>
                        </div>
                        <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16">
                            Submit
                        </button>
                    </div>
                </form>

            </div>
        </Section>
    )
}