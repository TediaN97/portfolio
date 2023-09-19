export const SkillButton = (props: {src: string, alt: string}) => {
    const { src } = props;
    const { alt } = props;

    return (
        <div className="flex items-center justify-center rounded-full bg-gray-50 shadow-xl mr-7 mt-10 p-5">
            <img className="w-10 h-10" src={src} alt={alt} />
        </div>
    );
}