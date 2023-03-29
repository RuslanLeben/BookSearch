export const BookCard = ({ title, imageUrl, categories, autors }) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={imageUrl} />
            <h1>{categories[0]}</h1>
            <h1>{autors}</h1>
        </div>
    )

} 