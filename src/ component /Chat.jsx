import React, { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp, query, where, onSnapshot ,orderBy } from 'firebase/firestore';
import { auth,conndb } from '../firebase'; 
import '../Styles/chat.css'

const Chat = (props) => {
  const [message, setMessage] = useState('');
  const [messagesList, setMessagesList] = useState([]);
  const { room } = props;

  useEffect(() => {
    const messagesRef = collection(conndb, 'messages');
    const q = query(messagesRef, where('room', '==', room),orderBy('sendAT'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedMessages = [];
      snapshot.forEach((doc) => {
        loadedMessages.push({ ...doc.data(), id: doc.id });
      });
      setMessagesList(loadedMessages);
    });

    return () => unsubscribe();
  }, [room]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message=== '') return;

    const messagesRef = collection(conndb, 'messages');
    await addDoc(messagesRef, {
      text: message,
      sendAT: serverTimestamp(),
      room: room,
      user: auth.currentUser.displayName,
    });

    setMessage('');
  };

  return (
    <div id='messagelist'>
      <h2>{room}</h2>
      <div className='messages'>
        {messagesList.map((msg) => (
          <div key={msg.id}><span>{msg.user} :</span>{msg.text}</div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Type a message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default Chat;
