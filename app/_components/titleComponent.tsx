interface TitleProps {
    title: String
}

const TitleCompoment = ({title}: TitleProps) => {
    return (
        <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">{title}</h2>
    )
}
export default TitleCompoment;