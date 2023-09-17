type TruncateTextProps = {
  text: string
  maxLength: number
}

export function TruncateText({ text, maxLength }: TruncateTextProps) {
  if (text.length <= maxLength) {
    return <>{text}</>
  }

  const truncatedText = text.substring(0, maxLength)
  return <>{truncatedText}...</>
}
