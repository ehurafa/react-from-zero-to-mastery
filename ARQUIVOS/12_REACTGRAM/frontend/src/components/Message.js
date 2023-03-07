import './Message.css';

function Message({msg, type }) {
  return (
    <div className={`message ${type}`}>{msg}</div>
  )
}

export default Message