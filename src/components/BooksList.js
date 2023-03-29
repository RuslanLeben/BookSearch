import { BookCard } from "./BookCard"

export const BooksList = ({ books }) => {
    return (
        <div>
            {books.length > 0 ? books.map(item => {
                console.log(item)
                return <BookCard key={item.id} title={item.volumeInfo.title} imageUrl={item.volumeInfo.imageLinks.smallThumbnail
                } categories={item.volumeInfo.categories} />
            }) : <div>We Don't Have Book With This Name</div>}

        </div>

    )
}