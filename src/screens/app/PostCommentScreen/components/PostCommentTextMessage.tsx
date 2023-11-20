import React, {useState} from 'react';

import {TextMessage} from '@components';

interface Props {
  postId: number;
}
export function PostCommentTextMessage({postId}: Props) {
  const [message, setMessage] = useState('');

  return (
    <TextMessage
      placeholder="Adicione um comentário"
      onPressSend={() => console.log('send', postId)}
      value={message}
      onChangeText={setMessage}
    />
  );
}
