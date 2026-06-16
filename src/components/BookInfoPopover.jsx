import { bookPopoverStyles } from "../styles/bookPopoverStyles.js"
import { formatAuthorName } from "../utils/formatAuthorName.js"
import { DownloadIcon } from "./icons/DownloadIcon.jsx"

export function BookInfoPopover({ book, position }) {
  const { title, authors, summaries, download_count} = book
  const author = formatAuthorName(authors[0]?.name)

  const bookInfoContainer = bookPopoverStyles.container
  const bookTitle = bookPopoverStyles.title
  const bookAuthor = bookPopoverStyles.author
  const bookSummary = bookPopoverStyles.summary
  const bookDownload = bookPopoverStyles.download
  const bookDownloadIcon = bookPopoverStyles.downloadIcon
  const bookEnd = bookPopoverStyles.bookEndContainer

  return (
      <div
        className={`${bookInfoContainer}`}
        style={{ left: position.x + 2, top: position.y + 8 }}
      >
      
      <h2 className={`${bookTitle}`}>{title}</h2>
      <p className={`${bookSummary}`}>{summaries[0]}</p>

      <div className={`${bookEnd}`}>
        <h3 className={`${bookAuthor}`}>by {author}</h3>
        <p className={`${bookDownload}`}>{download_count} <DownloadIcon className={bookDownloadIcon} /></p>
      </div>

      </div>
  )
}