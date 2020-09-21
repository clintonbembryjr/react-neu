import React from 'react'

interface EmojiProps {
  emoji?: string,
  size?: number
}

const Emoji: React.FC<EmojiProps> = ({
  emoji,
  size = 24
}) => (
  <span role="img" style={{ fontSize: size }}>{emoji}</span>
)

export default Emoji