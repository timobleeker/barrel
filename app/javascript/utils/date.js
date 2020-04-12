import { parseISO, formatDistanceToNow } from 'date-fns'

export const timeAgoInWords = (isoDate) => {
  if (!isoDate) return
  const date = parseISO(isoDate)
  return `${formatDistanceToNow(date)} ago`
}
