interface TitleProps {
    title: String
    uppercase?: Boolean
    px?: Number
}

const TitleCompoment = ({title, uppercase = true, px = 5}: TitleProps) => {
    return (
        <h2 className={`${uppercase ? "uppercase" : ""} px-${px} text-xs mb-3 text-gray-400 font-bold`}>{title}</h2>
    ) 
}
export default TitleCompoment;